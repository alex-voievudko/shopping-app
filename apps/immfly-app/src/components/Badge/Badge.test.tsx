import React from 'react';
import { render } from '@testing-library/react-native';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Badge>Test Badge</Badge>);
    expect(getByText('Test Badge')).toBeTruthy();
  });
});
