import { v4 } from 'uuid';
import { AppError } from '../../../errors/AppError';
import { ServicesRepositoryInMemory } from '../repositories/in-memory/ServiceRepositoryInMemory';
import { CreateServiceUseCase } from './createService/CreateServiceUseCase';

let createServiceUseCase: CreateServiceUseCase;
let servicesRepositoryInMemory: ServicesRepositoryInMemory;

describe('Create Service', () => {
  beforeEach(() => {
    servicesRepositoryInMemory = new ServicesRepositoryInMemory();
    createServiceUseCase = new CreateServiceUseCase(servicesRepositoryInMemory);
  });
  it('should be able to create a new service', async () => {
    const service = {
      user_id: v4(),
      name: 'Service name test',
      description: 'Service description test',
      manufacturer: 'Manufacturer name test',
      endpoint: 'http://test.com',
      username: 'user_test',
      password: 'password_test',
    };

    await createServiceUseCase.execute({
      user_id: service.user_id,
      name: service.name,
      description: service.description,
      manufacturer: service.manufacturer,
      endpoint: service.endpoint,
      username: service.username,
      password: service.password,
    });

    const serviceCreated = await servicesRepositoryInMemory.findByName(
      service.name
    );

    expect(serviceCreated).toHaveProperty('id');
  });

  it("shouldn't be able to create an existent service", async () => {
    const service = {
      user_id: v4(),
      name: 'Service name test',
      description: 'Service description test',
      manufacturer: 'Manufacturer name test',
      endpoint: 'http://test.com',
      username: 'user_test',
      password: 'password_test',
    };

    expect(async () => {
      await createServiceUseCase.execute({
        user_id: service.user_id,
        name: service.name,
        description: service.description,
        manufacturer: service.manufacturer,
        endpoint: service.endpoint,
        username: service.username,
        password: service.password,
      });

      await createServiceUseCase.execute({
        user_id: service.user_id,
        name: service.name,
        description: service.description,
        manufacturer: service.manufacturer,
        endpoint: service.endpoint,
        username: service.username,
        password: service.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
