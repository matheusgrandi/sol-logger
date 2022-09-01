import { ICreateServiceDTO } from '../../dtos/ICreateServiceDTO';
import { Service } from '../../entities/Service';
import { IServicesRepository } from '../IServicesRepository';

class ServicesRepositoryInMemory implements IServicesRepository {
  services: Service[] = [];

  async create({
    id,
    user_id,
    name,
    description,
    manufacturer,
    endpoint,
    username,
    password,
  }: ICreateServiceDTO): Promise<void> {
    const service = new Service();
    Object.assign(service, {
      id,
      user_id,
      name,
      description,
      manufacturer,
      endpoint,
      username,
      password,
    });

    this.services.push(service);
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

export { ServicesRepositoryInMemory };
