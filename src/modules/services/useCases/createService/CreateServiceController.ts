import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RepositoryNotTreeError } from 'typeorm';
import { AppError } from '../../../../errors/AppError';

import { CreateServiceUseCase } from './CreateServiceUseCase';

class CreateServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, manufacturer, endpoint, username, password } =
      request.body;
    const user_id = request.user.id;

    const createServiceUseCase = container.resolve(CreateServiceUseCase);

    try {
      await createServiceUseCase.execute({
        user_id,
        name,
        description,
        manufacturer,
        endpoint,
        username,
        password,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}

export { CreateServiceController };
