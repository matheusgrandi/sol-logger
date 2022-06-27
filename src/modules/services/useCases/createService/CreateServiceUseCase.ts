import { inject, injectable } from 'tsyringe';
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
    manufacturer,
    endpoint,
    username,
    password,
  }: ICreateServiceDTO): Promise<void> {
    const serviceAlreadyExists = await this.servicesRepository.findById(id);
    if (serviceAlreadyExists) {
      throw new Error('Service already in use!');
    }
    this.servicesRepository.create({
      id,
      user_id,
      manufacturer,
      endpoint,
      username,
      password,
    });
  }
}

export { CreateServiceUseCase };
