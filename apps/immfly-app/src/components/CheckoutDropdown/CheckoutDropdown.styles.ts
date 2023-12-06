import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '50%',
  },
  selectedOptionContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 16,
    backgroundColor: theme.colors.primary,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  selectedOptionText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
  },
  dropdownContainer: {
    position: 'absolute',
    bottom: '100%',
    right: 0,
    width: '100%',
    backgroundColor: theme.colors.white,
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 1,
  },
  dropdownOptionContainer: {
    paddingVertical: 8,
  },
  dropdownOptionText: {
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
  },
});
