import { View } from 'react-native';
import DropdownPortal from './overlay/DropdownPortal';
import type { DropdownProps } from './Dropdown.types';
import DropdownTrigger from './trigger';

const Dropdown = <T,>({ disabled }: DropdownProps<T>) => {
  return (
    <View>
      {/* Trigger */}
      <DropdownTrigger disabled={disabled} />

      {/* Overlay */}
      <DropdownPortal />
    </View>
  );
};

export default Dropdown;

{
  /* <View
      style={{
        backgroundColor: theme.colors?.background,
        padding: theme.spacing?.[12],
      }}
    >
      <Text
        style={{
          fontFamily: theme.typography?.fontFamily,
          fontWeight: theme.typography?.fontWeight,
          fontSize: theme.typography?.fontSize,
          color: theme.colors?.text,
        }}
      >
        Dropdown
      </Text>
    </View> */
}
