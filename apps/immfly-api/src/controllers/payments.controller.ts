import { Request, Response } from 'express';

export const processPayment = (req: Request, res: Response): void => {
  // Since we're just simulating this, we'll simply return a 200 status code.
  res.sendStatus(200);
};
