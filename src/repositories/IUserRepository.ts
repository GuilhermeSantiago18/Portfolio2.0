import { User } from "../entities/user/User";

export interface IUserRepository {
  findMany(): Promise<User[] | []>;
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
