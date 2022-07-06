import { container } from 'tsyringe';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IServicesRepository } from '../../modules/equipments/repositories/IServicesRepository';
import { ServicesRepository } from '../../modules/equipments/repositories/implementations/ServicesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IServicesRepository>(
  'ServicesRepository',
  ServicesRepository
);
