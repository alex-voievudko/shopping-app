import { Request, Response, NextFunction } from 'express';
import { db } from '../db';

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products = await db.product.findMany({ orderBy: { id: 'asc' } });
    res.json(products);
  } catch (error: unknown) {
    next(error);
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log(req.params.id);
    const product = await db.product.findUnique({
      where: { id: req.params.id },
    });
    res.json(product);
  } catch (error: unknown) {
    next(error);
  }
};
