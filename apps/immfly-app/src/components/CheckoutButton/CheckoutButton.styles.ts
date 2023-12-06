import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '50%',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 22,
    paddingVertical: 16,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    textTransform: 'uppercase',
    marginRight: 8,
  },
  totalPrice: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
  currency: {
    color: theme.colors.white,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    marginLeft: 4,
  },
});
