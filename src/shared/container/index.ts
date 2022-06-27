import { container } from 'tsyringe';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IServicesRepository } from '../../modules/services/repositories/IServicesRepository';
import { ServicesRepository } from '../../modules/services/repositories/implementations/ServicesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IServicesRepository>(
  'ServicesRepository',
  ServicesRepository
);
