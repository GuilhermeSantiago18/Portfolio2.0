import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';
import { PrismaUserRepository } from '../repositories/PrismaUserRepository';

const router = Router();

const userRepository = new PrismaUserRepository();
const createUserService = new UserService(userRepository);
const userController = new UserController(createUserService);

router.get('/users', userController.create);
router.post('/users', userController.getAll);
export default router;
