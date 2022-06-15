import { Repository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

import { dataSource } from './../../../../database';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = dataSource.getRepository(User);
  }
  async create({
    name,
    email,
    password,
    company,
    phone_number,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      phone_number,
      password,
      company,
    });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });
    return user;
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id });
    return user;
  }
}

export { UsersRepository };
