import { IServicesRepository } from '@modules/equipments/repositories/IServicesRepository';
import { inject, injectable } from 'tsyringe';

interface IResponseDTO {
  id?: string;
  user_id: string;
  description?: string | null;
  manufacturer: string;
  endpoint: string;
  username: string;
  status: string;
  created_at: Date;
}

@injectable()
class ListServicesUseCase {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository
  ) {}

  async execute(user_id: string): Promise<IResponseDTO[]> {
    const services = await this.servicesRepository.listByUserId(user_id);
    const filteredService = services.map(({ password, ...rest }) => rest);
    console.log(filteredService);
    return filteredService;
  }
}

export { ListServicesUseCase };
