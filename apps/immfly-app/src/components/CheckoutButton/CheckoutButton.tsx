import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './CheckoutButton.styles';

type CheckoutButtonProps = {
  currency: string;
  total: string;
  onPress: () => void;
};

export const CheckoutButton = ({ total, currency, onPress }: CheckoutButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.button}>
        <Text style={styles.text}>Pay</Text>
        <Text style={styles.totalPrice}>{total}</Text>
        <Text style={styles.currency}>{currency}</Text>
      </View>
    </TouchableOpacity>
  );
};
