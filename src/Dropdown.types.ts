import type { TextStyle, ViewStyle } from "react-native";

/* ======================================================
   Public Props for Dropdown Component
====================================================== */

export interface DropdownProps<T> {
  /* ---------- Data ---------- */
  data: T[];
  value?: T | T[] | null;
  defaultValue?: T | T[] | null;
  onChangeValue?: (item: T | T[]) => void;

  /* ---------- Field Mapping ---------- */
  placeholder?: string
  labelField?: keyof T;
  valueField?: keyof T;
  descriptionField?: keyof T;

  /* ---------- Label ---------- */
  label?: string;
  labelStyle?: TextStyle;
  required?: boolean;

  /* ---------- Tooltip ---------- */
  toolTipMessage?: string;
  toolTipIcon?: React.ReactNode;
  toolTipPosition?: "top" | "bottom" | "left" | "right";
  toolTipBackgroundColor?: string;
  toolTipTextColor?: string;
  toolTipTextStyle?: TextStyle;
  toolTipIconStyle?: ViewStyle;

  /* ---------- State ---------- */
  disabled?: boolean;
  loading?: boolean;
  searchable?: boolean;
  searchDebounce?: number;
  onSearch?: (text: string) => void | Promise<void>;

  /* ---------- Layout & Position ---------- */
  dynamicItemHeight?: boolean;
  getItemHeight?: (item: T) => number;
  repositionOnScroll?: boolean;
  useWindowDimensions?: boolean;
  maxVisibleItems?: number;

  /* ---------- Rendering Customization ---------- */
  renderItem?: (item: T, selected: boolean) => React.ReactNode;
  renderTrigger?: (value: T | T[] | null) => React.ReactNode;
  renderEmpty?: () => React.ReactNode;

  /* ---------- Dropdown Behavior ---------- */
  onToggle?: (open: boolean) => void;
  dropdownVariant?: "outlined" | "filled" | "underlined";

  /* ---------- Icons ---------- */
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;

  /* ---------- Helper Text ---------- */
  helperText?: string;
  errorText?: string;
  successText?: string;
  helperTextStyle?: TextStyle;

  /* ---------- Styles ---------- */
  containerStyle?: ViewStyle;
  dropdownStyle?: ViewStyle;

  /* ---------- Accessibility ---------- */
  testID?: string;
  accessibilityLabel?: string;
}


interface DropdownItem {
     label?: string
     labelField?: string; // for custom value rendering using valueField in data
     value?: string | number
     valueField?: string; // for custom value rendering using valueField in data
     description?: string

     itemLabelStyle?: TextStyle
     itemDescriptionStyle?: TextStyle
     disabled?: boolean
}

export type DropdownLabelProps<T> = Pick<
  DropdownProps<T>,
  "label" | "labelStyle" | "required" | "disabled"
>;

export type DropdownTooltipProps<T> = Pick<
  DropdownProps<T>,
  | "toolTipMessage"
  | "toolTipIcon"
  | "toolTipPosition"
  | "toolTipBackgroundColor"
  | "toolTipTextColor"
  | "toolTipTextStyle"
  | "toolTipIconStyle"
>;

export type DropdownTriggerProps<T> = Pick<
  DropdownProps<T>,
  | "value"
  | "placeholder"
  | "disabled"
  | "loading"
  | "dropdownVariant"
  | "leadingIcon"
  | "trailingIcon"
  | "renderTrigger"
> & {
  open: boolean;
  onPress: () => void;
};

export type DropdownHelperTextProps<T> = Pick<
  DropdownProps<T>,
  "helperText" | "errorText" | "successText" | "helperTextStyle"
>;

export interface DropdownListItemProps<T> {
  item: T;
  selected: boolean;
  disabled?: boolean;
  label?: string;
  description?: string;
  onPress: (item: T) => void;

  itemContainerStyle?: ViewStyle;
  itemLabelStyle?: TextStyle;
  itemDescriptionStyle?: TextStyle;
}

