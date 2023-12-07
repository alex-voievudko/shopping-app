import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    width: '50%',
  },
  item: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
});
