import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import config from '../../config/config.json';
import { styles } from './CurrencyButton.styles';

type CurrencyButtonProps = {
  currencyKey: string;
  onPress: () => void;
};

export const CurrencyButton = ({ currencyKey, onPress }: CurrencyButtonProps) => {
  const currency = config.currencies.find(currency => currency.code === currencyKey);
  const active = currencyKey === currency?.code;

  const containerStyle = StyleSheet.flatten([styles.container, active && styles.activeContainer]);
  const textStyle = StyleSheet.flatten([styles.text, active && styles.activeText]);

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>
        {currency?.flag} {currency?.code} - {currency?.name}
      </Text>
    </TouchableOpacity>
  );
};
