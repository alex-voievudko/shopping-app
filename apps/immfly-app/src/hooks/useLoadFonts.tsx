import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export const useLoadFonts = () => {
  const [loaded, error] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  });

  return { loaded, error };
};
