import { IUserRepository } from '../repositories/IUserRepository';
import { makeUser } from '../factories/makeUser';
import { UserProps } from '../entities/user/User';
import { AppError } from '../errors/AppError';
 
type CreateUserRequest = Pick<UserProps, 'name' | 'email' | 'password' | 'computer'>;


export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async createNewUser(data: CreateUserRequest) {
    const user = makeUser(data);

    const existing = await this.userRepository.findByEmail(user.email);
    if (existing) throw new AppError('User already exists', 403);

    return this.userRepository.create(user);
  }
}
