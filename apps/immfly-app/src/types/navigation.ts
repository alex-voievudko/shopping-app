import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Products: undefined;
  Checkout: undefined;
};

export type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;

export type CheckoutScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Checkout'
>;

export type ProductsScreenNavigationProps = ProductsScreenProps['navigation'];
export type CheckoutScreenNavigationProps = CheckoutScreenProps['navigation'];
