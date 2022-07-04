import { Repository, SimpleConsoleLogger } from 'typeorm';
import { dataSource } from '../../../../database';
import { AppError } from '../../../../errors/AppError';
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
    name,
    description,
    manufacturer,
    endpoint,
    username,
    password,
  }: ICreateServiceDTO): Promise<void> {
    const user = this.repository.create({
      id,
      user_id,
      name,
      description,
      manufacturer,
      endpoint,
      username,
      password,
    });

    await this.repository.save(user);
  }

  async findById(id: string): Promise<Service | null> {
    const user = await this.repository.findOneBy({ id });
    return user;
  }
}

export { ServicesRepository };
