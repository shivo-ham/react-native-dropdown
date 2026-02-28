import { Text, View } from 'react-native';
import type { DropdownLabelProps } from '../Dropdown.types';

const DropdownLabel = <T,>({
  label,
  required,
  labelStyle,
}: DropdownLabelProps<T>) => {
  if (!label) return null;

  return (
    <View accessible={false}>
      <Text style={labelStyle}>
        {label}
        {required && ' *'}
      </Text>
    </View>
  );
};

export default DropdownLabel;
