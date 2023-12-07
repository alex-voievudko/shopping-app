import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import type { Product } from '../../types/product';
import { Badge } from '../Badge/Badge';
import { Indicator } from '../Indicator/Indicator';
import { useCartStore, useSettingsStore, useModalsStore } from '../../store';
import config from '../../config/config.json';
import { styles } from './ProductCard.styles';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const {
    cart,
    actions: { addProduct, removeProduct },
  } = useCartStore();
  const { currency, exchangeRates } = useSettingsStore();
  const {
    actions: { setIsOutOfStockModalOpen },
  } = useModalsStore();

  const isProductInCart = cart.some(p => p.id === product.id);
  const productQuantity = cart.find(p => p.id === product.id)?.quantity || 0;
  const currencySymbol = config.currencies.find(c => c.code === currency)?.symbol;
  const productPrice = (product.price * exchangeRates[currency]).toFixed(2);
  const isOutOfStock = product.stock === productQuantity || product.stock === 0;

  const handleAddProduct = () => {
    if (isOutOfStock) {
      setIsOutOfStockModalOpen(true);
      return;
    }
    addProduct(product);
  };

  const handleRemoveProduct = () => {
    removeProduct(product.id);
  };

  const imageStyle = StyleSheet.flatten([styles.image, isOutOfStock && styles.imageOutOfStock]);
  const rowStyle = StyleSheet.flatten([styles.row, isOutOfStock && styles.rowOutOfStock]);

  return (
    <Pressable style={styles.container} onPress={handleAddProduct}>
      <Indicator top={8} right={8} type="primary" quantity={productQuantity} active={isProductInCart} />
      <Indicator top={8} left={8} type="danger" active={isProductInCart} onPress={handleRemoveProduct} />
      <Image style={imageStyle} source={product.image} contentFit="cover" />

      <View style={rowStyle}>
        <View style={styles.content}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.subtitle}>
            {product.stock === 0 ? 'Out of stock' : `${product.stock - productQuantity} items left`}
          </Text>
        </View>
        <Badge>{`${productPrice} ${currencySymbol}`}</Badge>
      </View>
    </Pressable>
  );
};
