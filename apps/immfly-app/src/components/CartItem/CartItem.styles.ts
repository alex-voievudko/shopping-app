import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.white,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: theme.colors.gray,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  name: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
  price: {
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    marginRight: 48,
  },
  quantity: {
    color: theme.colors.meta,
    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
  spacer: {
    flex: 1,
  },
  discount: {
    color: theme.colors.danger,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
  },
});
