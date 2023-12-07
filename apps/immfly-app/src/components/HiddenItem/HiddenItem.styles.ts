import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  hiddenContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: theme.colors.danger,
  },
  hiddenButton: {
    backgroundColor: theme.colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: '100%',
  },
});
