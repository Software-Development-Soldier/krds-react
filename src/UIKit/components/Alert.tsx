import React, { ReactNode } from 'react';

export interface AlertProps {
    type: "danger" | "ok" | "info";
    badgeTitle: string;
    children: ReactNode;
}

/**
 * Alert component (maps to critical-ban)
 */
export const Alert: React.FC<AlertProps> = ({ type, badgeTitle, children }) => {
    return (
        <div className="critical-ban">
            <span className={`critical-badge ${type}`}>{badgeTitle}</span>
            <div className="critical-txt">
                {children}
            </div>
        </div>
    );
};

/**
 * Container for Alerts (maps to krds-critical-alerts)
 */
export const AlertContainer: React.FC<{ children: ReactNode, className?: string }> = ({ children, className = '' }) => {
    return (
        <div className={`krds-critical-alerts ${className}`}>
            {children}
        </div>
    );
};
