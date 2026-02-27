import type { DropdownHelperTextProps } from '@/dropdown/Dropdown.types';
import { Text, View } from 'react-native';

const DropdownHelperText = <T,>({ helperText }: DropdownHelperTextProps<T>) => {
  return (
    <View>
      <Text>{helperText}</Text>
    </View>
  );
};

export default DropdownHelperText;
