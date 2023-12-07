import { View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useCartStore } from '../../store';
import { CartItem } from '../CartItem/CartItem';
import { HiddenItem } from '../HiddenItem/HiddenItem';
import { styles } from './CartList.styles';

export const CartList = () => {
  const {
    cart,
    actions: { removeAllProducts },
  } = useCartStore();

  return (
    <SwipeListView
      data={cart}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <CartItem item={item} />}
      renderHiddenItem={() => <HiddenItem />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      rightOpenValue={-104}
      onSwipeValueChange={swipeData => {
        const { key, value } = swipeData;
        if (value < -104) {
          removeAllProducts(key);
        }
      }}
      useNativeDriver={false}
    />
  );
};
