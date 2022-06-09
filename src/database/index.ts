import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../modules/accounts/entities/User';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'huxx_logger',
  entities: [User],
  migrations: ['src/database/migrations/*.ts'],
});

dataSource
  .initialize()
  .then(async () => {
    console.log('Initializing the DB');
  })
  .catch((err) => console.log(err));

export { dataSource };
