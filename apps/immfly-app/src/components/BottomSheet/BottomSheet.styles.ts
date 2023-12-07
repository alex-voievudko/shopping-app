import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 24,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seatContainer: {
    alignItems: 'flex-start',
  },
  totalContainer: {
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    textTransform: 'uppercase',
    color: theme.colors.meta,
    marginBottom: 4,
  },
  price: {
    fontFamily: theme.fonts.bold,
    fontSize: 32,
    color: theme.colors.black,
  },
  seatLetter: {
    fontFamily: theme.fonts.bold,
    fontSize: 32,
    color: theme.colors.black,
    marginRight: 4,
  },
  seatNumber: {
    fontFamily: theme.fonts.bold,
    fontSize: 32,
    color: theme.colors.black,
    marginLeft: 4,
  },
  buttonsContainer: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
