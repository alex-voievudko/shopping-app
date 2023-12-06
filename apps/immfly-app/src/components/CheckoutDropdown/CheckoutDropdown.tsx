import { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './CheckoutDropdown.styles';

export type Option = {
  label: string;
  value: number;
};

type CheckoutDropdownProps = {
  options: Option[];
  onChange: (value: number) => void;
};

export const CheckoutDropdown = ({ options, onChange }: CheckoutDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectedOptionContainer}
        activeOpacity={0.8}
        onPress={() => setShowDropdown(!showDropdown)}
      >
        <Text style={styles.selectedOptionText}>{selectedOption?.label ?? 'Discount'}</Text>
        <FontAwesome5 name={showDropdown ? 'chevron-up' : 'chevron-down'} size={16} color="white" />
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.dropdownContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleSelectOption(option)}
              style={styles.dropdownOptionContainer}
            >
              <Text style={styles.dropdownOptionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
