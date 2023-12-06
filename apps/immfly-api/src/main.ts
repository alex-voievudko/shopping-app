import express, { Request, Response, Errback, NextFunction } from 'express';
import cors from 'cors';
import { productsRoutes } from './routes/products.routes';
import { paymentsRoutes } from './routes/payments.routes';

const app = express();

app.use(cors());

// Error handling middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.use('/api/products', productsRoutes);
app.use('/api/payments', paymentsRoutes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
