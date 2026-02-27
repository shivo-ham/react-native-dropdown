import type { DropdownEndAdornmentProps } from '@/dropdown/Dropdown.types';
import { View } from 'react-native';

const DropdownEndAdornment = <T,>({
  trailingIcon,
}: DropdownEndAdornmentProps<T>) => {
  return <View>{trailingIcon}</View>;
};

export default DropdownEndAdornment;
