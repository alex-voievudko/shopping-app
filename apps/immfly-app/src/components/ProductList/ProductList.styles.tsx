import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    padding: 12,
  },
});
