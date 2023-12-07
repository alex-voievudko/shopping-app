import { Request, Response } from 'express';
import { db } from '../db';

type CartItem = {
  id: string;
  quantity: number;
};

export const processPayment = (req: Request, res: Response): void => {
  // reduce the stock of the products
  const cartItems = req.body as CartItem[];
  console.log('cartItems', req.body);

  cartItems.forEach(async item => {
    const product = await db.product.findUnique({
      where: { id: item.id },
    });
    await db.product.update({
      where: { id: item.id },
      data: { stock: product.stock - item.quantity },
    });
  });

  res.json({ message: 'Payment processed successfully' });
};
