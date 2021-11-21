import React, { useState } from 'react';
import { lightTheme, darkTheme } from '@/styles/theme';
import { useDarkMode } from '@/hooks/useDarkMode';

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const useTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ useTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
