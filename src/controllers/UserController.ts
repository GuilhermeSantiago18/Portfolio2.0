import { Request, Response, NextFunction } from 'express';
import { CreateUserService } from '../services/UserService';
import { AppError } from '../errors/AppError';

export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await this.createUserService.createNewUser(req.body);
      res.status(201).json(user);
    } catch (err: unknown) {
      if (err instanceof AppError) {
        res.status(err.statusCode).json({ error: err.message });
      } else {
        next(err);
      }
    }
  };
}
