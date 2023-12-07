import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './ModalBase.styles';

type ModalProps = {
  title?: string;
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const ModalBase = ({ title, isVisible, onClose, children }: ModalProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const reset = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 125,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isVisible) {
      animate();
    } else {
      reset();
    }
  }, [isVisible]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const containerStyle = StyleSheet.flatten([styles.modalContainer, { opacity }]);
  const modalStyle = StyleSheet.flatten([styles.modal, { transform: [{ translateY }] }]);

  return isVisible ? (
    <Animated.View style={containerStyle}>
      <Animated.View style={modalStyle}>
        {title && <Text style={styles.modalTitle}>{title}</Text>}

        <TouchableOpacity style={styles.modalCloseButton} onPress={onClose} activeOpacity={0.9}>
          <FontAwesome name="close" style={styles.modalCloseIcon} />
        </TouchableOpacity>

        {children}
      </Animated.View>
    </Animated.View>
  ) : null;
};
