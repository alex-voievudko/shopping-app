import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Header } from './Header';

describe('Header', () => {
  it('renders the correct title and subtitle', () => {
    const { getByText } = render(<Header title="Test Title" subtitle="Test Subtitle" />);
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('calls the onClose prop when the close button is pressed', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Header title="Test Title" onClose={onClose} />);

    fireEvent.press(getByTestId('close-button'));

    expect(onClose).toHaveBeenCalled();
  });
});
