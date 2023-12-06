import express from 'express';
import { processPayment } from '../controllers/payments.controller';

export const paymentsRoutes = express.Router();

paymentsRoutes.post('/', processPayment);
