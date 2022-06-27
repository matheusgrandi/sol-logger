import { manufacturers } from 'googleapis/build/src/apis/manufacturers';
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
    { id, user_id, manufacturer } = data
  }
  findById(id: string): Promise<Service> {
    throw new Error('Method not implemented.');
  }
}

export { ServicesRepository };
