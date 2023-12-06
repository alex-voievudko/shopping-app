import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

const products: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'Coca-Cola',
    price: 1.5,
    image:
      'https://plus.unsplash.com/premium_photo-1681879210164-ad653304fa35?q=80&w=400&auto=format&fit=crop',
    stock: 10,
  },
  {
    name: 'Sprite',
    price: 1.25,
    image:
      'https://plus.unsplash.com/premium_photo-1681879210164-ad653304fa35?q=80&w=400&auto=format&fit=crop',
    stock: 2,
  },
  {
    name: 'Pepsi',
    price: 1.4,
    image:
      'https://plus.unsplash.com/premium_photo-1681879210164-ad653304fa35?q=80&w=400&auto=format&fit=crop',
    stock: 5,
  },
  {
    name: 'Iced Tea',
    price: 2.0,
    image:
      'https://plus.unsplash.com/premium_photo-1681879210164-ad653304fa35?q=80&w=400&auto=format&fit=crop',
    stock: 3,
  },
  {
    name: 'Lemonade',
    price: 1.75,
    image:
      'https://plus.unsplash.com/premium_photo-1681879210164-ad653304fa35?q=80&w=400&auto=format&fit=crop',
    stock: 1,
  },
  {
    name: 'Ginger Ale',
    price: 1.8,
    image:
      'https://plus.unsplash.com/premium_photo-1681879210164-ad653304fa35?q=80&w=400&auto=format&fit=crop',
    stock: 0,
  },
  {
    name: 'Orange Juice',
    price: 2.25,
    image:
      'https://plus.unsplash.com/premium_photo-1681879210164-ad653304fa35?q=80&w=400&auto=format&fit=crop',
    stock: 10,
  },
  {
    name: 'Root Beer',
    price: 1.9,
    image:
      'https://plus.unsplash.com/premium_photo-1681879210164-ad653304fa35?q=80&w=400&auto=format&fit=crop',
    stock: 4,
  },
  {
    name: 'Fruit Punch',
    price: 2.1,
    image:
      'https://plus.unsplash.com/premium_photo-1681879210164-ad653304fa35?q=80&w=400&auto=format&fit=crop',
    stock: 1,
  },
];

const main = async () => {
  await prisma.product.createMany({
    data: products,
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
