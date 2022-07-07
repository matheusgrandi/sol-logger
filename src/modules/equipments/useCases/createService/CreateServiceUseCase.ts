import { publicEncrypt } from 'crypto';
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
    id,
    user_id,
    name,
    description,
    manufacturer,
    endpoint,
    username,
    password,
  }: ICreateServiceDTO): Promise<void> {
    const serviceAlreadyExists = await this.servicesRepository.findById(id!);
    if (serviceAlreadyExists) {
      throw new AppError('Service already in use!', 401);
    }

    const nameAlreadyInUse = await this.servicesRepository.findByName(name);
    if (nameAlreadyInUse) {
      throw new AppError('Name already in use!', 401);
    }

    await this.servicesRepository.create({
      id,
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
