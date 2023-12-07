import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 24,
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  rateText: {
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
  },
  divider: {
    width: 1,
    height: 12,
    backgroundColor: theme.colors.black,
    marginHorizontal: 8,
  },
});
