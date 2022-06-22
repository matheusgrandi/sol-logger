import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.use(ensureAuthenticated);
userRoutes.post('/', createUserController.handle);

export { userRoutes };
