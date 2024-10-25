import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import processRoutes from './routes/processRoutes.js';
import metricsRoutes from './routes/metricsRoutes.js';
import countryOperatorRoutes from './routes/countryOperatorRoutes.js';
import { connectMongo } from './config/db.js';

dotenv.config();
const app = express();
app.use(express.json());

// Connect to MongoDB
connectMongo();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/process', processRoutes);
app.use('/api/metrics', metricsRoutes);
app.use('/api/country-operators', countryOperatorRoutes);

export default app;
