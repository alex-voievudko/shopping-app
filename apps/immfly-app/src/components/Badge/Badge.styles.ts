import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    borderRadius: 9999,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: 14,
  },
});
