import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateNodeController } from '../modules/equipments/useCases/createNode/CreateNodeController';

const nodeRoute = Router();
nodeRoute.use(ensureAuthenticated);

const createNodeController = new CreateNodeController();

nodeRoute.post('/', createNodeController.handle);

export { nodeRoute };
