import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CurrencyButton } from './CurrencyButton';

jest.mock('../../config/config.json', () => ({
  currencies: [
    { code: 'USD', name: 'United States Dollar', flag: '$' },
    { code: 'EUR', name: 'Euro', flag: '€' },
  ],
}));

describe('CurrencyButton', () => {
  it('renders the correct flag, code, and name', () => {
    const { getByText } = render(<CurrencyButton currencyKey="USD" onPress={() => {}} />);
    expect(getByText('$ USD - United States Dollar')).toBeTruthy();
  });

  it('calls the onPress prop when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<CurrencyButton currencyKey="USD" onPress={onPress} />);

    fireEvent.press(getByText('$ USD - United States Dollar'));

    expect(onPress).toHaveBeenCalled();
  });
});
