import express from 'express';
import { dashboardRoutes } from './routes/dashboard.routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/dashboard', dashboardRoutes);

export { app };
