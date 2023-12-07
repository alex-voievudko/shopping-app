import { FlatList, Text, View } from 'react-native';
import { ProductCard } from '../ProductCard/ProductCard';
import { useProducts } from '../../services/products';
import { useRefreshByUser, useRefreshOnFocus } from '../../hooks';
import { styles } from './ProductList.styles';

export const ProductList = () => {
  const { data, isLoading, isError, refetch } = useProducts();
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
  // Makes sure we have fresh data when we come back to this screen
  useRefreshOnFocus(refetch);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      numColumns={2}
      refreshing={isRefetchingByUser}
      onRefresh={refetchByUser}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
};
