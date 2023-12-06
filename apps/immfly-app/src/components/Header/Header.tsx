import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './Header.styles';

type HeaderProps = {
  title: string;
  subtitle?: string;
  onClose?: () => void;
};

export const Header = ({ title, subtitle, onClose }: HeaderProps) => {
  const titleStyle = StyleSheet.flatten([styles.title, { marginBottom: subtitle ? 4 : 0 }]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={titleStyle}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        {onClose && (
          <TouchableOpacity testID="close-button" style={styles.closeContainer} onPress={onClose} activeOpacity={0.7}>
            <FontAwesome name="close" style={styles.closeIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
