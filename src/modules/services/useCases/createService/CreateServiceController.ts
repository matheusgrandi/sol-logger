import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateServiceUseCase } from './CreateServiceUseCase';

class CreateServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user_id, manufacturer, endpoint, username, password } =
      request.body;

    const createServiceUseCase = container.resolve(CreateServiceUseCase);

    createServiceUseCase.execute({
      id,
      user_id,
      manufacturer,
      endpoint,
      username,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateServiceController };
