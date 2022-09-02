import { AppError } from '../../../../errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemomy: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate user', () => {
  beforeEach(() => {
    usersRepositoryInMemomy = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemomy
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemomy);
  });
  it('should be able to authenticate an user', async () => {
    // Mock a user
    const user: ICreateUserDTO = {
      name: 'User name test',
      email: 'test@test.com',
      password: 'password_test',
      phone_number: '111111111',
    };

    await createUserUseCase.execute(user);

    // Authenticate user

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'false@email.com',
        password: '1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with an incorrect password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: 'User name test',
        email: 'test@test.com',
        password: 'password_test',
        phone_number: '111111111',
      };
      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrect_password',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
