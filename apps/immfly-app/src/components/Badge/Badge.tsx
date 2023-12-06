import { View, Text } from 'react-native';
import { styles } from './Badge.styles';

type BadgeProps = {
  children: React.ReactNode;
};

export const Badge = ({ children }: BadgeProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
);
