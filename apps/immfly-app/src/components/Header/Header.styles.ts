import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: theme.colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: theme.colors.gray,
  },
  closeIcon: {
    color: theme.colors.meta,
    fontSize: 20,
  },
  title: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: 22,
  },
  subtitle: {
    color: theme.colors.meta,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
  },
});
