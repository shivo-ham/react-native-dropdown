import { Text, View } from 'react-native';
import type { DropdownTriggerProps } from '../Dropdown.types';

const DropdownTrigger = <T,>({ placeholder }: DropdownTriggerProps<T>) => {
  return (
    <View>
      <Text>{placeholder}</Text>
    </View>
  );
};

export default DropdownTrigger;
