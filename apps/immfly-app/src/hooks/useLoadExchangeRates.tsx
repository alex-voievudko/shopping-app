import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useSettingsStore } from '../store';

// I don't hide the API key because it's free and it's not a secret
// This alows you to test the app without having to create an account or do anything else
// Normally I would hide it in a .env file
const EXCHANGE_RATE_API_URL =
  'http://api.exchangeratesapi.io/latest?base=EUR&access_key=e052aa58e1c1af511d0937eeb726f0d0&symbols=USD,GBP,EUR';

export const useLoadExchangeRates = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | AxiosError | null>(null);
  const { actions } = useSettingsStore();

  useEffect(() => {
    axios
      .get(EXCHANGE_RATE_API_URL)
      .then(response => {
        actions.setExchangeRates(response.data.rates);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [actions]);

  return { loading, error };
};
