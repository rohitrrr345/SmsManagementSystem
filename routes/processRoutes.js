import express from 'express';
import { startSession, stopSession } from '../controllers/processController.js';
import authenticateJWT from '../utils/jwtMiddleware.js';

const router = express.Router();

router.post('/start', startSession);
router.post('/stop', authenticateJWT, stopSession);

export default router;
