import express from 'express';
import { getProducts } from '../controllers/products.controller';

export const productsRoutes = express.Router();

productsRoutes.get('/', getProducts);
