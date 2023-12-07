import { render, fireEvent } from '@testing-library/react-native';
import { ModalChangeCurrency } from './ModalChangeCurrency';
import { useModalsStore, useSettingsStore } from '../../../store';

jest.mock('../../../store');

describe('ModalChangeCurrency', () => {
  it('calls setCurrency and setIsChangeCurrencyModalOpen when a currency button is pressed', () => {
    const setCurrency = jest.fn();
    const setIsChangeCurrencyModalOpen = jest.fn();

    (useModalsStore as unknown as jest.Mock).mockReturnValue({
      isChangeCurrencyModalOpen: true,
      actions: { setIsChangeCurrencyModalOpen },
    });

    (useSettingsStore as unknown as jest.Mock).mockReturnValue({
      currency: 'USD',
      exchangeRates: { USD: 1, EUR: 0.85 },
      actions: { setCurrency },
    });

    const { getByTestId } = render(<ModalChangeCurrency />);

    fireEvent.press(getByTestId('currency-button-EUR'));

    expect(setCurrency).toHaveBeenCalledWith('EUR');
    expect(setIsChangeCurrencyModalOpen).toHaveBeenCalledWith(false);
  });

  it('calls setIsChangeCurrencyModalOpen when the modal is closed', () => {
    const setIsChangeCurrencyModalOpen = jest.fn();

    (useModalsStore as unknown as jest.Mock).mockReturnValue({
      isChangeCurrencyModalOpen: true,
      actions: { setIsChangeCurrencyModalOpen },
    });

    (useSettingsStore as unknown as jest.Mock).mockReturnValue({
      currency: 'USD',
      exchangeRates: { USD: 1, EUR: 0.85 },
      actions: { setCurrency: jest.fn() },
    });

    const { getByTestId } = render(<ModalChangeCurrency />);

    fireEvent.press(getByTestId('modal-close-button'));

    expect(setIsChangeCurrencyModalOpen).toHaveBeenCalledWith(false);
  });
});
