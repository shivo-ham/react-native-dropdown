import { View } from 'react-native'
import { Dropdown } from '../../src/dropdown';

export default function App() {
  return (
    <View style={{flex:1,alignItems:'center',  marginTop:20}}>
      <Dropdown data={[]} label="Select an option" disabled={false} />
    </View>
  )
}

// import { Dropdown, DropdownProvider } from 'react-native-dropdown';

// <DropdownProvider
//   theme={{
//     typography: { fontFamily: 'Inter_Regular' },
//     colors: { primary: '#4F46E5' },
//     strings: {
//       noOptions: 'Koi option nahi mila',
//     },
//   }}
// >
//   <Dropdown />
// </DropdownProvider>

// const text = props.placeholder ?? defaultStrings.placeholder;