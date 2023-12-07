import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black + '80',
  },
  modal: {
    position: 'relative',
    backgroundColor: theme.colors.white,
    width: '80%',
    padding: 20,
    borderRadius: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    marginBottom: 20,
  },
  modalCloseButton: {
    position: 'absolute',
    top: -20,
    right: -20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: theme.colors.gray,
  },
  modalCloseIcon: {
    color: theme.colors.meta,
    fontSize: 20,
  },
});
