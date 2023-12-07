import { useMemo } from 'react';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import type { CartItem as CartItemType } from '../../store';
import { getCurrencySymbol } from '../../utils';
import { useCartStore, useSettingsStore } from '../../store';
import { styles } from './CartItem.styles';

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { currency, exchangeRates } = useSettingsStore();
  const { discount } = useCartStore();

  const price = useMemo(
    () => item.price * item.quantity * exchangeRates[currency],
    [item.price, item.quantity, exchangeRates, currency],
  );
  const priceWithDiscount = useMemo(() => price * (1 - discount), [price, discount]);
  const currencySymbol = useMemo(() => getCurrencySymbol(currency), [currency]);

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} contentFit="cover" />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.spacer} />
      <Text style={styles.price}>
        {price.toFixed(2)}
        {currencySymbol}
        {discount > 0 && (
          <Text style={styles.discount}>
            {' '}
            ({priceWithDiscount.toFixed(2)}
            {currencySymbol})
          </Text>
        )}
      </Text>

      <Text style={styles.quantity}>{item.quantity}</Text>
    </View>
  );
};
