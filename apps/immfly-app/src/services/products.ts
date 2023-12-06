import { useQuery } from '@tanstack/react-query';
import type { Product } from '../types';
import { api } from '../utils';

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await api.get<Product[]>('/products');
  return data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    enabled: true,
    retry: false,
  });
};
