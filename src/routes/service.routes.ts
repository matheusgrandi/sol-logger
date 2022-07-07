import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateServiceController } from '../modules/equipments/useCases/createService/CreateServiceController';
import { ListServicesController } from '../modules/equipments/useCases/listServices/ListServicesController';

const serviceRoutes = Router();
serviceRoutes.use(ensureAuthenticated);

const createServiceController = new CreateServiceController();
const listServicesController = new ListServicesController();

serviceRoutes.post('/', createServiceController.handle);
serviceRoutes.get('/', listServicesController.handle);

export { serviceRoutes };
