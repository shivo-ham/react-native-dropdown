import type { DropdownListItemProps } from '@/dropdown/Dropdown.types';
import { View } from 'react-native';

const DropdownListItem = <T,>({ label }: DropdownListItemProps<T>) => {
  return <View>{label}</View>;
};

export default DropdownListItem;
