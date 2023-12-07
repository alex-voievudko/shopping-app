import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CurrencyButton } from './CurrencyButton';

describe('CurrencyButton', () => {
  it('renders the correct currency details', () => {
    const { getByText } = render(<CurrencyButton currencyKey="USD" active={false} onPress={() => {}} />);

    expect(getByText('🇺🇸 $ - US Dollar')).toBeTruthy();
  });

  it('calls onPress prop when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<CurrencyButton currencyKey="USD" active={false} onPress={mockOnPress} />);

    fireEvent.press(getByText('🇺🇸 $ - US Dollar'));

    expect(mockOnPress).toHaveBeenCalledWith('USD');
  });
});
