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
  async create({
    id,
    user_id,
    manufacturer,
    endpoint,
    username,
    password,
  }: ICreateServiceDTO): Promise<void> {
    const user = this.repository.create({
      id,
      user_id,
      manufacturer,
      endpoint,
      username,
      password,
    });

    await this.repository.save(user);
  }
  findById(id: string): Promise<Service> {
    throw new Error('Method not implemented.');
  }
}

export { ServicesRepository };
