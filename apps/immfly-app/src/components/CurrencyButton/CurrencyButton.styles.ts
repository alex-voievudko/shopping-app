import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 22,
    paddingVertical: 16,
    borderRadius: 8,
  },
  activeContainer: {
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
  activeText: {
    color: theme.colors.white,
  },
});
