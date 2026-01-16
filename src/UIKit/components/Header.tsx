import React, { ReactNode } from 'react';

// --- Header Utility ---
export interface HeaderUtilityProps {
    children: ReactNode;
}

export const HeaderUtility: React.FC<HeaderUtilityProps> = ({ children }) => {
    return (
        <div className="header-utility">
            <ul className="utility-list">
                {children}
            </ul>
        </div>
    );
};

// --- Header Branding ---
export interface HeaderBrandingProps {
    children: ReactNode;
}

export const HeaderBranding: React.FC<HeaderBrandingProps> = ({ children }) => {
    return (
        <div className="header-container">
            <div className="inner">
                <div className="header-branding">
                    {children}
                </div>
            </div>
        </div>
    );
};

// --- Header Logo ---
export interface HeaderLogoProps {
    href?: string;
    alt?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ href = "/", alt = "Go to Main Page", onClick }) => {
    return (
        <div className="logo">
            <a href={href} onClick={onClick} title={alt}>
                <span className="sr-only">{alt}</span>
            </a>
        </div>
    );
};

// --- Header Actions ---
export interface HeaderActionsProps {
    children: ReactNode;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({ children }) => {
    return (
        <div className="header-actions">
            {children}
        </div>
    );
};

// --- Header Navigation Button ---
export interface HeaderNavButtonProps {
    icon: "sch" | "login" | "join" | "my" | "all";
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string; // e.g., 'navi-row'
}

export const HeaderNavButton: React.FC<HeaderNavButtonProps> = ({ icon, label, onClick, className = '' }) => {
    return (
        <button type="button" className={`btn-navi ${icon} ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

// --- Main Header Container ---
export interface HeaderProps {
    children: ReactNode;
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className = '' }) => {
    return (
        <header id="krds-header" className={className}>
            <div className="header-in">
                {children}
            </div>
        </header>
    );
};
