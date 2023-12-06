import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './SafeArea.styles';

type SafeAreaProps = {
  children: React.ReactNode;
};

export const SafeArea = ({ children }: SafeAreaProps) => {
  const insets = useSafeAreaInsets();

  const rootStyles = StyleSheet.flatten([styles.root, { paddingTop: insets.top, paddingBottom: insets.bottom }]);

  return <View style={rootStyles}>{children}</View>;
};
