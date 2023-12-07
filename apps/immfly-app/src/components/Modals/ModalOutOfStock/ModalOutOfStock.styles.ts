import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    color: theme.colors.danger,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
});
