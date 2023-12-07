import { useRef, useEffect } from 'react';
import { Animated, Text, Pressable, StyleSheet } from 'react-native';
import { styles, bgColor } from './Indicator.styles';

type IndicatorProps = {
  type: 'primary' | 'secondary' | 'danger';
  top: number;
  right?: number;
  left?: number;
  quantity?: number;
  active?: boolean;
  onPress?: () => void;
};

export const Indicator = ({ active, quantity, type, top, right, left, onPress }: IndicatorProps) => {
  const scale = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const reset = () => {
    Animated.timing(scale, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (active) {
      animate();
    } else {
      reset();
    }
  }, [active]);

  const indicatorStyle = StyleSheet.flatten([
    styles.indicator,
    { backgroundColor: bgColor(type) },
    { transform: [{ scale }] },
  ]);

  return (
    <Pressable onPress={onPress} style={[styles.container, { top, right, left }]}>
      <Animated.View style={indicatorStyle}>
        <Text style={styles.text}>{type === 'primary' ? quantity : type === 'secondary' ? quantity : '-'}</Text>
      </Animated.View>
    </Pressable>
  );
};
