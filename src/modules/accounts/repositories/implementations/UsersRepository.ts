import { Repository } from 'typeorm';
import { User } from '../../entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

import { dataSource } from './../../../../database';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = dataSource.getRepository(User);
  }
  async create({
    id,
    name,
    email,
    password,
    company,
    avatar,
    phone_number,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      email,
      phone_number,
      password,
      company,
      avatar,
    });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User | null> {
    const user =
      email !== (undefined || null)
        ? await this.repository.findOneBy({ email })
        : null;
    return user;
  }
  async findById(id: string): Promise<User | null> {
    const user =
      id !== (undefined || null)
        ? await this.repository.findOneBy({ id })
        : null;
    return user;
  }

  async findByPhone(phone: string): Promise<User | null> {
    const user =
      phone !== (undefined || null)
        ? await this.repository.findOneBy({ phone_number: phone })
        : null;
    return user;
  }
}

export { UsersRepository };
