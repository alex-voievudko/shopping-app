import { Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './PaymentButton.styles';

type PaymentButtonProps = {
  title: string;
  type: 'cash' | 'card';
  onPress: () => void;
};

export const PaymentButton = ({ title, type, onPress }: PaymentButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      {type === 'cash' && <FontAwesome5 name="coins" style={styles.icon} testID="coins" />}
      {type === 'card' && <FontAwesome5 name="credit-card" style={styles.icon} testID="card" />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
