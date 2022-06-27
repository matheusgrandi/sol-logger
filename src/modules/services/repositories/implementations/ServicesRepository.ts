import { Repository } from 'typeorm';
import { dataSource } from '../../../../database';
import { ICreateServiceDTO } from '../../dtos/ICreateServiceDTO';
import { Service } from '../../entities/Service';
import { IServicesRepository } from '../IServicesRepository';

class ServicesRepository implements IServicesRepository {
  private repository: Repository<Service>;
  constructor() {
    this.repository = dataSource.getRepository(Service);
  }
  create(data: ICreateServiceDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Service> {
    throw new Error('Method not implemented.');
  }
}

export { ServicesRepository };
