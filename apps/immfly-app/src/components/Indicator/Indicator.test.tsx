import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Indicator } from './Indicator';

describe('Indicator', () => {
  it('renders the correct text for primary type', () => {
    const { getByText } = render(<Indicator type="primary" top={10} quantity={5} />);
    expect(getByText('5')).toBeTruthy();
  });

  it('renders the correct text for secondary type', () => {
    const { getByText } = render(<Indicator type="secondary" top={10} quantity={3} />);
    expect(getByText('3')).toBeTruthy();
  });

  it('renders the correct text for danger type', () => {
    const { getByText } = render(<Indicator type="danger" top={10} />);
    expect(getByText('-')).toBeTruthy();
  });

  it('calls the onPress prop when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Indicator type="primary" top={10} quantity={5} onPress={onPress} />);
    fireEvent.press(getByText('5'));
    expect(onPress).toHaveBeenCalled();
  });
});
