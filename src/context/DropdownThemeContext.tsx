import React, { createContext, useContext } from 'react';
import { defaultTheme } from './defaultTheme';
import type { DropdownTheme } from './theme.types';

const DropdownThemeContext = createContext<DropdownTheme | undefined>(
  undefined
);

interface DropdownProviderProps {
  theme?: DropdownTheme;
  children: React.ReactNode;
}

export const DropdownProvider = ({
  theme,
  children,
}: DropdownProviderProps) => {
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
    typography: {
      ...defaultTheme.typography,
      ...theme?.typography,
    },
    colors: {
      ...defaultTheme.colors,
      ...theme?.colors,
    },
    spacing: {
      ...defaultTheme.spacing,
      ...theme?.spacing,
    },
  };

  return (
    <DropdownThemeContext.Provider value={mergedTheme}>
      {children}
    </DropdownThemeContext.Provider>
  );
};

export const useDropdownTheme = () => {
  const context = useContext(DropdownThemeContext);
  return context ?? defaultTheme;
};
