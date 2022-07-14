import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateNodeController } from '../modules/equipments/useCases/createNode/CreateNodeController';
import { ListNodesController } from '../modules/equipments/useCases/listNodes/ListNodesController';

const nodeRoute = Router();
nodeRoute.use(ensureAuthenticated);

const createNodeController = new CreateNodeController();
const listNodesController = new ListNodesController();

nodeRoute.post('/', createNodeController.handle);
nodeRoute.get('/', listNodesController.handle);

export { nodeRoute };
