import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@errors/AppError';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    company,
    phone_number,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new AppError('User already exists!', 401);
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      company,
      phone_number,
    });
  }
}

export { CreateUserUseCase };
