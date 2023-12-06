import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { SafeArea } from './SafeArea';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn().mockReturnValue({ top: 10, bottom: 10 }),
}));

describe('SafeArea', () => {
  it('renders the children correctly', () => {
    const { getByText } = render(
      <SafeArea>
        <Text>Test Child</Text>
      </SafeArea>,
    );
    expect(getByText('Test Child')).toBeTruthy();
  });
});
