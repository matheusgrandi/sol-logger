import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListNodesUseCase } from './ListNodesUseCase';

class ListNodesController {
  async handle(request: Request, response: Response) {
    const { service_id } = request.body;
    const listNodesUseCase = container.resolve(ListNodesUseCase);

    const nodes = await listNodesUseCase.execute(service_id);

    return response.status(200).json(nodes);
  }
}

export { ListNodesController };
