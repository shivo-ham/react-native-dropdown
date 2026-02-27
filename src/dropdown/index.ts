export { default as DropdownLabel } from './DropdownLabel';
export { default as DropdownTooltip } from './DropdownTooltip';

export { default as DropdownTrigger } from './DropdownTrigger';
export { default as DropdownStartAdornment } from './DropdownStartAdornment';
export { default as DropdownEndAdornment } from './DropdownEndAdornment';

export { default as DropdownHelperText } from './DropdownHelperText';

export { default as DropdownListItem } from './DropdownListItem';

// export interface DropdownProps<T> {
//      containerStyle?: ViewStyle

//      label?: string;
//      labelStyle?: TextStyle

//      toolTipMessage?: string;
//      toolTipIcon?: React.ReactNode;
//      toolTipPosition?: 'top' | 'bottom' | 'left' | 'right'
//      toolTipBackgroundColor?: string
//      toolTipTextColor?: string
//      toolTipTextStyle?: TextStyle
//      toolTipIconStyle?: ViewStyle

//      dropdownStyle?: ViewStyle
//      dropdownVariant?: 'outlined' | 'filled' | 'underlined'
//      placeholder?: string
//      loading?: boolean
//      disabled?: boolean;
//      leadingIcon?: React.ReactNode
//      trailingIcon?: React.ReactNode

//      searchable?: boolean         // enable search
//      searchDebounce?: number  // debounce time for search input
//      onSearch?: (text: string) => void | Promise<void>

//      value?: T | T[] | null
//      defaultValue?: T | T[] | null
//      onChangeValue?: (item: T | T[]) => void
//      onToggle?: () => void // callback for dropdown open/close state change

//      data: T[]
//      maxVisibleItems?: number  // for dropdown height control

//      labelField?: keyof T
//      valueField?: keyof T
//      descriptionField?: keyof T

//      renderItem?: (item: T, selected: boolean) => React.ReactNode
//      renderTrigger?: (value: T | T[] | null) => React.ReactNode
//      renderEmpty?: () => React.ReactNode

//      helperText?: string
//      errorText?: string
//      successText?: string
//      helperTextStyle?: TextStyle

//      required?: boolean
//      testID?: string
//      accessibilityLabel?: string

// }