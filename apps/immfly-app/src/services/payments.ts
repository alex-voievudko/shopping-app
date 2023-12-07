import { useMutation } from '@tanstack/react-query';
import type { CartItem } from '../store';
import { api } from '../utils';

export const makePayment = async (cart: CartItem[]) => {
  const cartItems = cart.map(item => ({
    id: item.id,
    quantity: item.quantity,
  }));
  const { data } = await api.post('/payments', cartItems);
  return data;
};

export const useMakePayment = () => {
  return useMutation({
    mutationFn: makePayment,
    mutationKey: ['makePayment'],
  });
};
