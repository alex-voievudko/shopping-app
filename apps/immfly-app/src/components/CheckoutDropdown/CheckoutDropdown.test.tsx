import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { CheckoutDropdown, Option } from './CheckoutDropdown';

describe('CheckoutDropdown', () => {
  it('renders the correct option details', () => {
    const mockOptions: Option[] = [
      { label: '10% off', value: 10 },
      { label: '20% off', value: 20 },
    ];

    const { getByText } = render(
      <CheckoutDropdown options={mockOptions} discount={0} onChange={() => {}}>
        <Text>1</Text>
      </CheckoutDropdown>,
    );

    expect(getByText('Discount')).toBeTruthy();
  });

  it('calls onChange prop when an option is selected', () => {
    const mockOptions: Option[] = [
      { label: '10% off', value: 10 },
      { label: '20% off', value: 20 },
    ];

    const mockOnChange = jest.fn();

    const { getByText } = render(
      <CheckoutDropdown options={mockOptions} discount={0} onChange={mockOnChange}>
        <Text>1</Text>
      </CheckoutDropdown>,
    );

    fireEvent.press(getByText('Discount'));
    fireEvent.press(getByText('10% off'));

    expect(mockOnChange).toHaveBeenCalledWith(10);
  });
});
