import { View } from 'react-native';
import { ModalBase } from '../ModalBase/ModalBase';
import { useModalsStore, useSettingsStore } from '../../../store';
import { CurrencyButton } from '../../CurrencyButton/CurrencyButton';

export const ModalChangeCurrency = () => {
  const {
    isChangeCurrencyModalOpen,
    actions: { setIsChangeCurrencyModalOpen },
  } = useModalsStore();
  const {
    currency,
    exchangeRates,
    actions: { setCurrency },
  } = useSettingsStore();

  const handlePress = (currencyKey: string) => {
    setCurrency(currencyKey);
    setIsChangeCurrencyModalOpen(false);
  };

  const handleClose = () => {
    setIsChangeCurrencyModalOpen(false);
  };

  return (
    <ModalBase title="Select Currency" isVisible={isChangeCurrencyModalOpen} onClose={handleClose}>
      <View>
        {Object.keys(exchangeRates).map(key => (
          <CurrencyButton key={key} currencyKey={key} active={currency === key} onPress={handlePress} />
        ))}
      </View>
    </ModalBase>
  );
};
