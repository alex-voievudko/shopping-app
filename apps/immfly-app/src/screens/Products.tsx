import { SafeArea } from '../components/SafeArea/SafeArea';
import { Header } from '../components/Header/Header';
import { CheckoutBar } from '../components/CheckoutBar/CheckoutBar';
import { ProductList } from '../components/ProductList/ProductList';
import { ModalChangeCurrency } from '../components/Modals/ModalChangeCurrency/ModalChangeCurrency';
import { ModalOutOfStock } from '../components/Modals/ModalOutOfStock/ModalOutOfStock';

export const ProductsScreen = () => {
  return (
    <SafeArea>
      <Header title="Products" />
      <ProductList />
      <CheckoutBar />
      <ModalChangeCurrency />
      <ModalOutOfStock />
    </SafeArea>
  );
};
