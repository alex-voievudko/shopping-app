import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { AppProvider } from './providers/AppProvider';
import { Router } from './navigation/Router';
import { useLoadFonts, useLoadExchangeRates } from './hooks';

SplashScreen.preventAutoHideAsync();

export const App = () => {
  const { loaded: fontLoaded, error: fontError } = useLoadFonts();

  // Probably not the best place to load exchange rates,
  // as the entire app will be blocked until the API responds
  // and the rates will be set to store only once when the app starts.
  // If we want them to be more dynamic amybe we need to load them each time
  // the use goes to the Products screen
  const { loading: ratesLoading, error: ratesError } = useLoadExchangeRates();

  const loading = !fontLoaded || ratesLoading;
  const error = fontError || ratesError;

  useEffect(() => {
    if (!loading) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

  if (loading || error) {
    return null;
  }

  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
