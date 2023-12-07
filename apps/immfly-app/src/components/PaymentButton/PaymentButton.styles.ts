import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../theme';

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = (width - 72) / 2;

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.black,
    borderRadius: 8,
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
  },
  title: {
    position: 'absolute',
    bottom: 16,
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.meta,
  },
  icon: {
    fontSize: 32,
    color: theme.colors.white,
  },
});
