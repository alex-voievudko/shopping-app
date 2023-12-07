import React from 'react';
import { render } from '@testing-library/react-native';
import { HiddenItem } from './HiddenItem';

describe('HiddenItem', () => {
  it('renders the trash icon', () => {
    const { getByTestId } = render(<HiddenItem />);

    expect(getByTestId('trash-icon')).toBeTruthy();
  });
});
