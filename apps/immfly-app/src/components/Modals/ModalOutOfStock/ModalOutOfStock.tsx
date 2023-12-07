import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ModalBase } from '../ModalBase/ModalBase';
import { useModalsStore } from '../../../store';
import { styles } from './ModalOutOfStock.styles';

export const ModalOutOfStock = () => {
  const {
    isOutOfStockModalOpen,
    actions: { setIsOutOfStockModalOpen },
  } = useModalsStore();

  const handleClose = () => {
    setIsOutOfStockModalOpen(false);
  };

  return (
    <ModalBase isVisible={isOutOfStockModalOpen} onClose={handleClose}>
      <View style={styles.container}>
        <FontAwesome name="exclamation-circle" size={50} style={styles.icon} />
        <Text style={styles.text}>Sorry, this product is out of stock.</Text>
      </View>
    </ModalBase>
  );
};
