import { View } from 'react-native';
import type { DropdownListItemProps } from '../Dropdown.types';

const DropdownListItem = <T,>({ label }: DropdownListItemProps<T>) => {
  return <View>{label}</View>;
};

export default DropdownListItem;
