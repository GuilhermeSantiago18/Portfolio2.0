import { IUserRepository } from './IUserRepository';
import { User } from '../entities.ts/User';
import {PrismaClient} from '../database/prisma/client';
const prisma = new PrismaClient()

export class PrismaUserRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    const created = await prisma.user.create({
      data: {
        
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return created;
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }
}
