import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';
import { ProductsScreen } from '../screens';
import { CheckoutScreen } from '../screens';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Products" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Products" component={ProductsScreen} />
        <RootStack.Screen name="Checkout" component={CheckoutScreen} options={{ presentation: 'containedModal' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
