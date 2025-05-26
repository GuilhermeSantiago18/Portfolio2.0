import { IUserRepository } from './IUserRepository';
import { User } from '../entities/user/User';
import {PrismaClient} from '../database/prisma/client';

const prisma = new PrismaClient()

export class PrismaUserRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    const data = user.toPrimitives();

    const created = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    return new User(created, created.id);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    return user ? new User(user, user.id) : null;
  }

  async findMany(): Promise<User[]> {
  const allUsers = await prisma.user.findMany();
  return allUsers.map(user => new User(user, user.id));
}

}
