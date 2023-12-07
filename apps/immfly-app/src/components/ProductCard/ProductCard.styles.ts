import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 36) / 2;
const DISABLED_OPACITY = 0.5;

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    justifyContent: 'flex-end',
    marginBottom: 12,
    zIndex: 0,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    backgroundColor: theme.colors.gray,
  },
  imageOutOfStock: {
    opacity: DISABLED_OPACITY,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  rowOutOfStock: {
    opacity: DISABLED_OPACITY,
  },
  content: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
  subtitle: {
    color: theme.colors.meta,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
  },
});
