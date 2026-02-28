import { Text, View } from 'react-native';
import type { DropdownTooltipProps } from '../Dropdown.types';

const DropdownTooltip = <T,>({ toolTipMessage }: DropdownTooltipProps<T>) => {
  return (
    <View>
      <Text>{toolTipMessage}</Text>
    </View>
  );
};

export default DropdownTooltip;
