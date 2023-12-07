import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getCurrencyFlag, getCurrencyName, getCurrencySymbol } from '../../utils';
import { styles } from './CurrencyButton.styles';

type CurrencyButtonProps = {
  currencyKey: string;
  active: boolean;
  onPress: (currencyKey: string) => void;
};

export const CurrencyButton = ({ currencyKey, active, onPress }: CurrencyButtonProps) => {
  const currencyFlag = getCurrencyFlag(currencyKey);
  const currencySymbol = getCurrencySymbol(currencyKey);
  const currencyName = getCurrencyName(currencyKey);

  const containerStyle = StyleSheet.flatten([styles.container, active && styles.activeContainer]);
  const textStyle = StyleSheet.flatten([styles.text, active && styles.activeText]);

  return (
    <TouchableOpacity
      style={containerStyle}
      activeOpacity={0.8}
      onPress={() => onPress(currencyKey)}
      testID={`currency-button-${currencyKey}`}
    >
      <Text style={textStyle}>
        {currencyFlag} {currencySymbol} - {currencyName}
      </Text>
    </TouchableOpacity>
  );
};
