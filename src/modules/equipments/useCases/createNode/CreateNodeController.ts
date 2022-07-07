import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateNodeUseCase } from './CreateNodeUseCase';

class CreateNodeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { service_id, inverter_id, name, description } = request.body;
    const user_id = request.user.id;

    const createNodeUseCase = container.resolve(CreateNodeUseCase);
    await createNodeUseCase.execute({
      user_id,
      service_id,
      inverter_id,
      name,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateNodeController };
