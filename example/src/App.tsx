import { Dropdown, DropdownProvider } from 'react-native-dropdown';

<DropdownProvider
  theme={{
    typography: { fontFamily: 'Inter_Regular' },
    colors: { primary: '#4F46E5' },
    strings: {
      noOptions: 'Koi option nahi mila',
    },
  }}
>
  <Dropdown />
</DropdownProvider>

// const text = props.placeholder ?? defaultStrings.placeholder;