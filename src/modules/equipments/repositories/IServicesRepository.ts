import { ICreateServiceDTO } from '../dtos/ICreateServiceDTO';
import { Service } from '../entities/Service';

interface IServicesRepository {
  create(data: ICreateServiceDTO): Promise<void>;
  findById(id: string): Promise<Service | null>;
}

export { IServicesRepository };
