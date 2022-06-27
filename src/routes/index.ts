import { Router } from 'express';
import { userRoutes } from './user.routes';
import { authenticateRoutes } from './authenticate.routes';
import { serviceRoutes } from './service.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/service', serviceRoutes);
router.use(authenticateRoutes);

export { router };
