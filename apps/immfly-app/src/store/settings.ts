import { create } from 'zustand';

type SettingsStore = {
  currency: string;
  exchangeRates: Record<string, number>;
  seatLetter: string;
  seatNumber: number;
  actions: {
    setCurrency: (currency: string) => void;
    setExchangeRates: (exchangeRates: Record<string, number>) => void;
    setSeatLetter: (seatLetter: string) => void;
    setSeatNumber: (seatNumber: number) => void;
  };
};

export const useSettingsStore = create<SettingsStore>(set => ({
  currency: 'EUR',
  exchangeRates: {},
  seatLetter: 'A',
  seatNumber: 1,
  actions: {
    setCurrency: (currency: string) => set({ currency }),
    setExchangeRates: (exchangeRates: Record<string, number>) => set({ exchangeRates }),
    setSeatLetter: (seatLetter: string) => set({ seatLetter }),
    setSeatNumber: (seatNumber: number) => set({ seatNumber }),
  },
}));
