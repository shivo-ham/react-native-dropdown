import type { TextStyle } from 'react-native';

export interface DropdownTypography {
  fontFamily?: TextStyle['fontFamily'];
  fontWeight?: TextStyle['fontWeight'];
  fontSize?: number;
}

export interface DropdownColors {
  primary?: string;
  background?: string;
  text?: string;
  border?: string;
  error?: string;
}

export interface DropdownSpacing {
  0?: number;
  4?: number;
  8?: number;
  12?: number;
  16?: number;
  20?: number;
  24?: number;
  32?: number;
  40?: number;
  48?: number;
}

export interface DropdownTheme {
  typography?: DropdownTypography;
  colors?: DropdownColors;
  spacing?: DropdownSpacing;
}
