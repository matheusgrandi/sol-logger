import { inject, injectable } from 'tsyringe';
import { Service } from '../../entities/Service';
import { IServicesRepository } from '../../repositories/IServicesRepository';

@injectable()
class ListServicesUseCase {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository
  ) {}

  async execute(user_id: string): Promise<Service[]> {
    const services = await this.servicesRepository.listByUserId(user_id);
    return services;
  }
}

export { ListServicesUseCase };
