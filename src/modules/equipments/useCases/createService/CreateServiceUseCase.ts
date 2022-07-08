import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ICreateServiceDTO } from '../../dtos/ICreateServiceDTO';
import { IServicesRepository } from '../../repositories/IServicesRepository';

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository
  ) {}

  async execute({
    user_id,
    name,
    description,
    manufacturer,
    endpoint,
    username,
    password,
  }: ICreateServiceDTO): Promise<void> {
    const nameAlreadyInUse = await this.servicesRepository.findByName(
      name,
      user_id
    );
    if (nameAlreadyInUse) {
      throw new AppError('Name already in use!', 401);
    }

    await this.servicesRepository.create({
      user_id,
      name,
      description,
      manufacturer,
      endpoint,
      username,
      password,
    });
  }
}

export { CreateServiceUseCase };
