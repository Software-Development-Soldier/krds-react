
import { createContext, useContext } from 'react';

export type ThemeMode = 'light' | 'dark' | 'high-contrast';

export interface ThemeContextProps {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a KRDSProvider');
    }
    return context;
};
