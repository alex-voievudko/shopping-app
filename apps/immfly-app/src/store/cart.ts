import { create } from 'zustand';
import { Product } from '../types';

export interface CartItem extends Product {
  quantity: number;
}

type CartStore = {
  cart: CartItem[];
  discount: number;
  totalCount: () => number;
  totalPrice: () => number;
  actions: {
    addProduct: (product: Product) => void;
    removeProduct: (id: string) => void;
    removeAllProducts: (id: string) => void;
    clearCart: () => void;
    setDiscount: (discount: number) => void;
    clearDiscount: () => void;
  };
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  discount: 0,
  totalCount: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),
  totalPrice: () => {
    const { discount } = get();
    const total = get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalDiscount = total * discount;
    return total - totalDiscount;
  },
  actions: {
    addProduct: product => {
      const { cart } = get();
      const index = cart.findIndex(item => item.id === product.id);
      if (index === -1) {
        set({ cart: [...cart, { ...product, quantity: 1 }] });
      } else {
        cart[index].quantity += 1;
        set({ cart: [...cart] });
      }
    },
    removeProduct: id => {
      const { cart } = get();
      const index = cart.findIndex(item => item.id === id);
      if (index !== -1) {
        cart[index].quantity -= 1;
        if (cart[index].quantity === 0) {
          cart.splice(index, 1);
        }
        set({ cart: [...cart] });
      }
    },
    removeAllProducts: id => {
      const { cart } = get();
      const index = cart.findIndex(item => item.id === id);
      if (index !== -1) {
        cart.splice(index, 1);
        set({ cart: [...cart] });
      }
    },
    clearCart: () => set({ cart: [] }),
    setDiscount: discount => set({ discount }),
    clearDiscount: () => set({ discount: 0 }),
  },
}));
