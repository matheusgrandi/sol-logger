import { Router } from 'express';
import { userRoutes } from './user.routes';
import { authenticateRoutes } from './authenticate.routes';
import { serviceRoutes } from './service.routes';
import { nodeRoute } from './node.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/service', serviceRoutes);
router.use('/node', nodeRoute);
router.use(authenticateRoutes);

export { router };
