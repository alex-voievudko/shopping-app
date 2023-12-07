import { create } from 'zustand';

type ModalsStore = {
  isOutOfStockModalOpen: boolean;
  isChangeCurrencyModalOpen: boolean;
  isChangeSeatModalOpen: boolean;
  actions: {
    setIsOutOfStockModalOpen: (isOpen: boolean) => void;
    setIsChangeCurrencyModalOpen: (isOpen: boolean) => void;
    setIsChangeSeatModalOpen: (isOpen: boolean) => void;
  };
};

export const useModalsStore = create<ModalsStore>(set => ({
  isOutOfStockModalOpen: false,
  isChangeCurrencyModalOpen: false,
  isChangeSeatModalOpen: false,
  actions: {
    setIsOutOfStockModalOpen: isOpen => set({ isOutOfStockModalOpen: isOpen }),
    setIsChangeCurrencyModalOpen: isOpen => set({ isChangeCurrencyModalOpen: isOpen }),
    setIsChangeSeatModalOpen: isOpen => set({ isChangeSeatModalOpen: isOpen }),
  },
}));
