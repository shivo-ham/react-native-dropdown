import { View } from 'react-native';
import type { AdornmentProps } from '../Dropdown.types';

const Adornment = <T,>({ icon }: AdornmentProps<T>) => {
  return <View>{icon}</View>;
};

export default Adornment;
