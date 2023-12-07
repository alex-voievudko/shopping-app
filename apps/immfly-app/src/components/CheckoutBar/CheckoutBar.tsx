import React, { useRef, useEffect } from 'react';
import { Animated, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { ProductsScreenNavigationProps } from '../../types';
import { CheckoutButton } from '../CheckoutButton/CheckoutButton';
import { CheckoutDropdown } from '../CheckoutDropdown/CheckoutDropdown';
import { Indicator } from '../Indicator/Indicator';
import { useCartStore, useSettingsStore, useModalsStore } from '../../store';
import config from '../../config/config.json';
import { convertTotalPrice } from '../../utils';
import { styles } from './CheckoutBar.styles';

type Option = {
  label: string;
  value: number;
};

const currencyConversionMap: Record<string, string[]> = {
  EUR: ['USD', 'GBP'],
  USD: ['EUR', 'GBP'],
  GBP: ['EUR', 'USD'],
};

export const CheckoutBar = () => {
  const navigation = useNavigation<ProductsScreenNavigationProps>();
  const {
    cart,
    totalCount,
    totalPrice,
    discount,
    actions: { setDiscount },
  } = useCartStore();
  const { currency, exchangeRates } = useSettingsStore();
  const {
    actions: { setIsChangeCurrencyModalOpen },
  } = useModalsStore();

  const animatedValue = useRef(new Animated.Value(0)).current;

  const discountOptions: Option[] = config.discounts.map(discount => ({
    label: discount.name,
    value: discount.value,
  }));
  const visible = cart.length > 0;
  const selectedCurrencies = currencyConversionMap[currency];

  const animate = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const reset = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 125,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (visible) {
      animate();
    } else {
      reset();
    }
  }, [visible]);

  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  const handleDiscountChange = (value: number) => {
    setDiscount(value);
  };

  const handleCurrencyChange = () => {
    setIsChangeCurrencyModalOpen(true);
  };

  const containerStyle = StyleSheet.flatten([
    styles.container,
    { transform: [{ translateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [200, 0] }) }] },
  ]);

  return (
    <Animated.View style={containerStyle}>
      <View style={styles.buttonsContainer}>
        <CheckoutButton
          currency={currency}
          total={convertTotalPrice(totalPrice(), exchangeRates[currency])}
          onPress={handleCheckout}
        />

        <CheckoutDropdown discount={discount} options={discountOptions} onChange={handleDiscountChange}>
          <Indicator top={-16} right={-16} active={true} type="secondary" quantity={totalCount()} />
        </CheckoutDropdown>
      </View>
      <TouchableOpacity style={styles.ratesContainer} activeOpacity={0.9} onPress={handleCurrencyChange}>
        {selectedCurrencies.map((selectedCurrency, index) => (
          <React.Fragment key={selectedCurrency}>
            <Text style={styles.rateText}>{`${convertTotalPrice(
              totalPrice(),
              exchangeRates[selectedCurrency],
            )} ${selectedCurrency}`}</Text>
            {index < selectedCurrencies.length - 1 && <View style={styles.divider}></View>}
          </React.Fragment>
        ))}
      </TouchableOpacity>
    </Animated.View>
  );
};
