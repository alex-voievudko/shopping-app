import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  contentContainer: {
    padding: 12,
  },
  separator: {
    height: 12,
  },
});
