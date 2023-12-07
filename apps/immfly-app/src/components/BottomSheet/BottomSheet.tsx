import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { CheckoutScreenNavigationProps } from '../../types';
import { PaymentButton } from '../PaymentButton/PaymentButton';
import { useCartStore, useSettingsStore, useModalsStore } from '../../store';
import { styles } from './BottomSheet.styles';
import { convertTotalPrice, getCurrencySymbol } from '../../utils';
import { useMakePayment } from '../../services/payments';

export const BottomSheet = () => {
  const navigation = useNavigation<CheckoutScreenNavigationProps>();
  const mutation = useMakePayment();
  const {
    cart,
    totalPrice,
    actions: { clearCart, clearDiscount },
  } = useCartStore();
  const { currency, exchangeRates, seatLetter, seatNumber } = useSettingsStore();
  const {
    actions: { setIsChangeSeatModalOpen },
  } = useModalsStore();

  const currencySymbol = getCurrencySymbol(currency);

  const handlePayment = async () => {
    try {
      if (cart.length > 0) {
        await mutation.mutateAsync(cart);
        clearCart();
        clearDiscount();
        navigation.navigate('Products');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.seatContainer}>
          <Text style={styles.title}>Seat</Text>
          <TouchableOpacity onPress={() => setIsChangeSeatModalOpen(true)} style={styles.button} activeOpacity={0.8}>
            <Text style={styles.seatLetter}>{seatLetter}</Text>
            <Text style={styles.seatNumber}>{seatNumber}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.title}>Total</Text>
          <Text style={styles.price}>
            {convertTotalPrice(totalPrice(), exchangeRates[currency])}
            {currencySymbol}
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <PaymentButton title="Cash" type="cash" onPress={() => handlePayment()} />
        <PaymentButton title="Card" type="card" onPress={() => handlePayment()} />
      </View>
      {mutation.error && <Text>{mutation.error.message}</Text>}
    </View>
  );
};
