import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CheckoutDropdown } from './CheckoutDropdown';

describe('CheckoutDropdown', () => {
  it('handles option selection correctly', () => {
    const options = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      // Add more options if needed
    ];
    const onChange = jest.fn();
    const { getByText, queryByText } = render(<CheckoutDropdown options={options} onChange={onChange} />);

    expect(getByText('Discount')).toBeTruthy();

    fireEvent.press(getByText('Discount'));

    expect(getByText('Option 1')).toBeTruthy();
    expect(getByText('Option 2')).toBeTruthy();

    fireEvent.press(getByText('Option 1'));

    expect(onChange).toHaveBeenCalledWith(1);
    expect(queryByText('Option 1')).toBeTruthy();
  });
});
