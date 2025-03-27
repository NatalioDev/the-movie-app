// contexts/ThemeContext.tsx
'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextType, ThemeName } from '../types/theme';
import { lightTheme, darkTheme } from '../config/theme';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(lightTheme); // Valor inicial para SSR

  useEffect(() => {
    // Solo en cliente después del montaje
    const savedTheme = localStorage.getItem('theme') as ThemeName | null;
    setTheme(savedTheme === 'dark' ? darkTheme : lightTheme);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme.name === 'light' ? darkTheme : lightTheme;
      localStorage.setItem('theme', newTheme.name);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

