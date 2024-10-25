import express from 'express';
import { getMetrics } from '../controllers/metricsController.js';
import authenticateJWT from '../utils/jwtMiddleware.js';

const router = express.Router();

router.get('/', authenticateJWT, getMetrics);

export default router;
