import express from 'express';

import { router } from './routes';
import { AppDataSource } from './data-source';

import './database';

const app = express();

app.use(express.json());
app.use(router);

AppDataSource.initialize().catch((error) => console.log(error));

export { app };

app.listen(3000, () => console.log('Server is running! 🚀'));
