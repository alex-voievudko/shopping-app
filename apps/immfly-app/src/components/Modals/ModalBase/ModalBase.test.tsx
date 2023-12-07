import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { ModalBase } from './ModalBase';

jest.useFakeTimers();

describe('ModalBase', () => {
  it('renders the modal when isVisible is true', () => {
    const { getByText } = render(
      <ModalBase title="Test Modal" isVisible={true} onClose={() => {}}>
        <Text>Modal Content</Text>
      </ModalBase>,
    );

    expect(getByText('Test Modal')).toBeTruthy();
    expect(getByText('Modal Content')).toBeTruthy();
  });

  it('does not render the modal when isVisible is false', () => {
    const { queryByText } = render(
      <ModalBase title="Test Modal" isVisible={false} onClose={() => {}}>
        <Text>Modal Content</Text>
      </ModalBase>,
    );

    expect(queryByText('Test Modal')).toBeFalsy();
    expect(queryByText('Modal Content')).toBeFalsy();
  });

  it('calls onClose when the close button is pressed', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <ModalBase title="Test Modal" isVisible={true} onClose={onClose}>
        <Text>Modal Content</Text>
      </ModalBase>,
    );

    fireEvent.press(getByTestId('modal-close-button'));

    expect(onClose).toHaveBeenCalled();
  });
});
