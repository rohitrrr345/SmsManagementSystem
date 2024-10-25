import express from 'express';
import { addCountryOperator, getCountryOperators } from '../controllers/countryOperatorController.js';
import authenticateJWT from '../utils/jwtMiddleware.js';

const router = express.Router();

router.post('/add', authenticateJWT, addCountryOperator);
router.get('/', authenticateJWT, getCountryOperators);

export default router;
