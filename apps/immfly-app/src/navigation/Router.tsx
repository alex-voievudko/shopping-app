import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import { ProductsScreen } from '../screens/Products';
import { CheckoutScreen } from '../screens/Checkout';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Products"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Products" component={ProductsScreen} />
        <RootStack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ presentation: 'containedModal' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
