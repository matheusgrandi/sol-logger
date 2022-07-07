import { ICreateServiceDTO } from '../dtos/ICreateServiceDTO';
import { Service } from '../entities/Service';

interface IServicesRepository {
  create(data: ICreateServiceDTO): Promise<void>;
  findByName(name: string): Promise<Service | null>;
  findById(id: string): Promise<Service | null>;
  listByUserId(id: string): Promise<Service[]>;
}

export { IServicesRepository };
