import config from '../config/config.json';

export const getCurrencySymbol = (currency: string) => {
  const currencies = config.currencies;
  const currencyObj = currencies.find(c => c.code === currency);
  return currencyObj?.symbol;
};

export const getCurrencyName = (currency: string) => {
  const currencies = config.currencies;
  const currencyObj = currencies.find(c => c.code === currency);
  return currencyObj?.name;
};

export const getCurrencyFlag = (currency: string) => {
  const currencies = config.currencies;
  const currencyObj = currencies.find(c => c.code === currency);
  return currencyObj?.flag;
};
