import { AppProvider } from './providers/AppProvider';
import { Router } from './navigation/Router';

export const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
