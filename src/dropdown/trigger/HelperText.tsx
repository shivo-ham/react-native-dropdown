import { Text, View } from 'react-native';
import type { DropdownHelperTextProps } from '../Dropdown.types';

const DropdownHelperText = <T,>({ helperText }: DropdownHelperTextProps<T>) => {
  return (
    <View>
      <Text>{helperText}</Text>
    </View>
  );
};

export default DropdownHelperText;
