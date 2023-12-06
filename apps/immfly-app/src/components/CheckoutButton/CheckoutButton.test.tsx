import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CheckoutButton } from './CheckoutButton';

describe('CheckoutButton', () => {
  it('renders the correct total and currency', () => {
    const { getByText } = render(<CheckoutButton total="100" currency="USD" onPress={() => {}} />);
    expect(getByText('100')).toBeTruthy();
    expect(getByText('USD')).toBeTruthy();
  });

  it('calls the onCheckout prop when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<CheckoutButton total="100" currency="USD" onPress={onPress} />);

    fireEvent.press(getByText('Pay'));

    expect(onPress).toHaveBeenCalled();
  });
});
