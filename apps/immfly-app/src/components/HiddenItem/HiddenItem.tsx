import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './HiddenItem.styles';

export const HiddenItem = () => {
  return (
    <View style={styles.hiddenContainer}>
      <View style={styles.hiddenButton}>
        <View testID="trash-icon">
          <FontAwesome name="trash-o" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};
