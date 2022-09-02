import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];
  async create({
    name,
    email,
    password,
    company,
    phone_number,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      password,
      company,
      phone_number,
    });
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    return user ? user : null;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return user ? user : null;
  }

  async findByPhone(phone: string): Promise<User | null> {
    const user = this.users.find((user) => user.phone_number === phone);
    return user ? user : null;
  }
}

export { UsersRepositoryInMemory };
