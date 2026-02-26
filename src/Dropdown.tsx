import { Text, View } from 'react-native';
import { useDropdownTheme } from './theme/DropdownThemeContext';

const Dropdown = () => {
  const theme = useDropdownTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors?.background,
        padding: theme.spacing?.md,
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
    </View>
  );
};

export default Dropdown;