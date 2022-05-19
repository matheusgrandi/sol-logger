import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from 'modules/accounts/dtos/ICreateUserDTO';
import { User } from 'modules/accounts/entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }
  create(data: ICreateUserDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

export { UsersRepository };
