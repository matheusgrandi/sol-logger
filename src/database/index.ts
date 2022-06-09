import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../modules/accounts/entities/User';

//docker-compose exec app node --require ts-node/register ./node_modules/typeorm/cli.js migration:run -d src/database
//yarn typeorm migration:create src/database/migrations/MigrationName

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
