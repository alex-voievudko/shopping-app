import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 7000,
    width: 32,
    height: 32,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    width: 32,
    height: 32,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: 14,
  },
});

export const bgColor = (type: 'primary' | 'secondary' | 'danger') => {
  switch (type) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'danger':
      return theme.colors.danger;
    default:
      return theme.colors.primary;
  }
};
