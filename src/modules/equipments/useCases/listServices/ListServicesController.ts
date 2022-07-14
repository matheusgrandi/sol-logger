import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListServicesUseCase } from './ListServicesUseCase';

class ListServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listServicesUseCase = container.resolve(ListServicesUseCase);
    const user_id = request.user.id;

    const services = await listServicesUseCase.execute(user_id);

    return response.status(200).json(services);
  }
}

export { ListServicesController };
