import { Router } from 'express';

import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AunthenticateUserController';

const authenticateRoutes = Router();
const autheticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', autheticateUserController.handle);

export { authenticateRoutes };
