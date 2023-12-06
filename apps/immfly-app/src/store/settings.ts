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

const useSettingsStore = create<SettingsStore>(set => ({
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

export const useCurrency = () => useSettingsStore(state => state.currency);
export const useExchangeRates = () => useSettingsStore(state => state.exchangeRates);
export const useSeatLetter = () => useSettingsStore(state => state.seatLetter);
export const useSeatNumber = () => useSettingsStore(state => state.seatNumber);
export const useSetCurrency = () => useSettingsStore(state => state.actions.setCurrency);
export const useSetExchangeRates = () => useSettingsStore(state => state.actions.setExchangeRates);
export const useSetSeatLetter = () => useSettingsStore(state => state.actions.setSeatLetter);
export const useSetSeatNumber = () => useSettingsStore(state => state.actions.setSeatNumber);
export const useSettingsActions = () => useSettingsStore(state => state.actions);
