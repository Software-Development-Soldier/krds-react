import React, { ReactNode, useEffect } from 'react';

// Import global styles
// common.scss contains tokens, reset, and base styles
import '../../resources/scss/common/common.scss';
// component.scss contains all component-specific styles
import '../../resources/scss/component/component.scss';

export interface KRDSProviderProps {
    children: ReactNode;
    injectScript?: boolean;
    mode?: 'light' | 'dark' | 'high-contrast';
}

export const KRDSProvider: React.FC<KRDSProviderProps> = ({
    children,
    injectScript = true,
    mode = 'light'
}) => {
    useEffect(() => {
        // Set the required attribute for KRDS styles
        document.documentElement.setAttribute('data-krds-mode', mode);

        // If we want to automatically load the ui-script.js
        if (injectScript && !document.getElementById('krds-ui-script')) {
            const script = document.createElement('script');
            script.id = 'krds-ui-script';
            script.src = '/resources/js/component/ui-script.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, [injectScript, mode]);

    return (
        <div className="krds-wrapper">
            {children}
        </div>
    );
};
