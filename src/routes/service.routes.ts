import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateServiceController } from '../modules/equipments/useCases/createService/CreateServiceController';

const serviceRoutes = Router();
serviceRoutes.use(ensureAuthenticated);

const createServiceController = new CreateServiceController();

serviceRoutes.post('/', createServiceController.handle);

export { serviceRoutes };
