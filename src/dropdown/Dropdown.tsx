import { View } from 'react-native';
import { DropdownLabel } from '@/internal';
// import { useDropdownTheme } from './theme/DropdownThemeContext';
import type { DropdownProps } from './Dropdown.types';

const Dropdown = <T,>({ label, disabled }: DropdownProps<T>) => {
  // const theme = useDropdownTheme();

  return (
    <View>
      <DropdownLabel label={label} disabled={disabled} />
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
