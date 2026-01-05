import React, { ReactNode, useEffect, useState, useCallback } from 'react';
import { ThemeContext, ThemeMode } from './hooks/useTheme';

// Import theme tokens mapping
import '../../resources/css/token/theme.css';

// Import global styles
// common.scss contains tokens, reset, and base styles
import '../../resources/scss/common/common.scss';
// component.scss contains all component-specific styles
import '../../resources/scss/component/component.scss';

export interface KRDSProviderProps {
    children: ReactNode;
    injectScript?: boolean;
    mode?: ThemeMode;
}

export const KRDSProvider: React.FC<KRDSProviderProps> = ({
    children,
    injectScript = true,
    mode: initialMode = 'light'
}) => {
    const [theme, setTheme] = useState<ThemeMode>(initialMode);

    useEffect(() => {
        if (initialMode) {
            setTheme(initialMode);
        }
    }, [initialMode]);

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'light' ? 'high-contrast' : 'light');
    }, []);

    useEffect(() => {
        // Set the required attribute for KRDS styles
        document.documentElement.setAttribute('data-krds-mode', theme);

        // If we want to automatically load the ui-script.js
        if (injectScript && !document.getElementById('krds-ui-script')) {
            const script = document.createElement('script');
            script.id = 'krds-ui-script';
            script.src = '/resources/js/component/ui-script.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, [injectScript, theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <div className="krds-wrapper">
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
