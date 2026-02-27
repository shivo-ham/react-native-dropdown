import { Text, View } from 'react-native';
import {DropdownLabel, DropdownTrigger } from '@dropdown'
import { useDropdownTheme } from './theme/DropdownThemeContext';
import type { DropdownProps } from './Dropdown.types';

const Dropdown = ({ label, disabled }: DropdownProps) => {
  const theme = useDropdownTheme();

  return (
    <View>
      <DropdownLabel 
        label={label}
        disabled={disabled}
      />
      <DropdownTrigger/> 
    </View>
  );
};

export default Dropdown;


{/* <View
      style={{
        backgroundColor: theme.colors?.background,
        padding: theme.spacing?.[12],
      }}
    >
      <Text
        style={{
          fontFamily: theme.typography?.fontFamily,
          fontWeight: theme.typography?.fontWeight,
          fontSize: theme.typography?.fontSize,
          color: theme.colors?.text,
        }}
      >
        Dropdown
      </Text>
    </View> */}