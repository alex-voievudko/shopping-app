import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { PaymentButton } from './PaymentButton';

describe('PaymentButton', () => {
  it('should render the component', () => {
    const { getByText } = render(<PaymentButton title="Cash" type="cash" onPress={() => {}} />);
    expect(getByText('Cash')).toBeTruthy();
  });

  it('should call onPress when the button is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<PaymentButton title="Cash" type="cash" onPress={onPress} />);

    fireEvent.press(getByText('Cash'));
    expect(onPress).toHaveBeenCalled();
  });
});
