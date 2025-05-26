import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';
import { AppError } from '../errors/AppError';

export class UserController {
  constructor(private readonly UserService: UserService) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await this.UserService.createNewUser(req.body);
      res.status(201).json(user);
    } catch (err: unknown) {
      if (err instanceof AppError) {
        res.status(err.statusCode).json({ error: err.message });
      } else {
        next(err);
      }
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const allUsers = await this.UserService.getAll();
      res.status(201).json(allUsers)
    } catch(err: unknown) {
        if (err instanceof AppError) {
        res.status(err.statusCode).json({ error: err.message });
      } else {
        next(err);
      }
    }
  }
}
