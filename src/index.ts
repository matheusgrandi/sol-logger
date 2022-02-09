import express from 'express';
import { relatoriesRoutes } from './routes/relatories.routes'

const app = express();

app.use(express.json());

app.use('/relatory', relatoriesRoutes);

export { app }
