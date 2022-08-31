import { ICreateServiceDTO } from '../../dtos/ICreateServiceDTO';
import { Service } from '../../entities/Service';
import { IServicesRepository } from '../IServicesRepository';

class ServicesRepositoryInMemory implements IServicesRepository {
  services: Service[] = [];

  create(data: ICreateServiceDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findByName(name: string): Promise<Service | null> {
    const service = this.services.find((service) => service.name === name);
    return service ? service : null;
  }
  async findById(id: string): Promise<Service | null> {
    const service = this.services.find((service) => service.id === id);
    return service ? service : null;
  }
  listByUserId(id: string): Promise<Service[]> {
    throw new Error('Method not implemented.');
  }
}
