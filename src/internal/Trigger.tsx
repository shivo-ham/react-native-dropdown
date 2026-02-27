import type { DropdownTriggerProps } from '@/dropdown/Dropdown.types';
import { Text, View } from 'react-native';

const DropdownTrigger = <T,>({ placeholder }: DropdownTriggerProps<T>) => {
  return (
    <View>
      <Text>{placeholder}</Text>
    </View>
  );
};

export default DropdownTrigger;
