import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { typography } from './typography';
import { spacing } from './spacing';

// Define the structure of the theme configuration
interface ThemeConfig {
  secondary10: string;
  secondary15: string;
  secondary20: string;
  tertiary10: string;
  tertiary20: string;
  tertiary30: string;
  primary: string;
  primary30: string;
  primary40: string;
  accent: string;
}

// Define the possible themes
type Theme = 'light' | 'dark';

// Define the context type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  themeConfig: ThemeConfig;
  typography: typeof typography;
  spacing: typeof spacing;
}
// Define the theme configuration for both light and dark themes
const themeConfig: Record<Theme, ThemeConfig> = {
  light: {
    primary: 'hsl(210, 80%, 20%)', // use for button
    primary30: 'hsl(210, 80%, 30%)', // use for button hover
    primary40: 'hsl(210, 80%, 40%)', // use for button hover
    secondary10: 'hsl(150, 50%, 90%)', // use for background
    secondary15: 'hsl(150, 50%, 75%)',
    secondary20: 'hsl(150, 50%, 80%)',
    tertiary10: 'hsl(150, 50%, 10%)', // use for text
    tertiary20: 'hsl(150, 50%, 20%)',
    tertiary30: 'hsl(150, 50%, 30%)',
    accent: 'hsl(90, 80%, 20%)',
  },
  dark: {
    primary: 'hsl(210, 80%, 80%)',
    primary30: 'hsl(210, 80%, 70%)',
    primary40: 'hsl(210, 80%, 60%)', // use for button hover
    secondary10: 'hsl(150, 50%, 10%)',
    secondary15: 'hsl(150, 50%, 15%)',
    secondary20: 'hsl(150, 50%, 20%)',
    tertiary10: 'hsl(150, 50%, 90%)',
    tertiary20: 'hsl(150, 50%, 80%)',
    tertiary30: 'hsl(150, 50%, 70%)',
    accent: 'hsl(90, 80%, 80%)',
  },
};

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Define the ThemeProvider props type
interface ThemeProviderProps {
  children: ReactNode;
}

// The ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) || 'light'
  );

  useEffect(() => {
    // Port the other configs as css variables
    Object.keys(typography).forEach((key) => {
      document.documentElement.style.setProperty(
        `--${key}-typography`,
        typography[key as keyof typeof typography]
      );
    });
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    // Create CSS variables based on the selected theme for the colors
    const currentConfig = themeConfig[theme];
    Object.keys(currentConfig).forEach((key) => {
      document.documentElement.style.setProperty(
        `--${key}-color`,
        currentConfig[key as keyof ThemeConfig]
      );
    });
  }, [theme]);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeConfig: themeConfig[theme],
        typography,
        spacing,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
