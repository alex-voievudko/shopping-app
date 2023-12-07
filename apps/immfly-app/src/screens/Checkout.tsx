import { SafeArea } from '../components/SafeArea/SafeArea';
import { Header } from '../components/Header/Header';
import type { CheckoutScreenProps } from '../types';
import { CartList } from '../components/CartList/CartList';
import { BottomSheet } from '../components/BottomSheet/BottomSheet';
import { ModalSelectSeat } from '../components/Modals/ModalSelectSeat/ModalSelectSeat';

export const CheckoutScreen = ({ navigation }: CheckoutScreenProps) => {
  return (
    <SafeArea>
      <Header title="Checkout" subtitle="Selected Products" onClose={() => navigation.goBack()} />
      <CartList />
      <BottomSheet />
      <ModalSelectSeat />
    </SafeArea>
  );
};
