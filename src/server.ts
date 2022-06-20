import 'reflect-metadata';

import './database';

import './shared/container';

import express from 'express';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

export { app };

app.listen(3000, () => console.log('Server is running! 🚀'));
