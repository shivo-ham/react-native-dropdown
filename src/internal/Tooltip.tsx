import type { DropdownTooltipProps } from '@/dropdown/Dropdown.types';
import { Text, View } from 'react-native';

const DropdownTooltip = <T,>({ toolTipMessage }: DropdownTooltipProps<T>) => {
  return (
    <View>
      <Text>{toolTipMessage}</Text>
    </View>
  );
};

export default DropdownTooltip;
