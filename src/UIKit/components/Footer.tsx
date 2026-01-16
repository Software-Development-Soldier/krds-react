import React, { ReactNode } from 'react';

// Main Footer Container
export const Footer = ({ children, className = '' }: { children: ReactNode, className?: string }) => {
    return (
        <footer id="krds-footer" className={className}>
            {children}
        </footer>
    );
};

// Quick Links Section (e.g., Privacy Policy, Terms)
export const FooterQuick = ({ children }: { children: ReactNode }) => (
    <div className="foot-quick">
        <div className="inner">
            {children}
        </div>
    </div>
);

export const FooterQuickLink = ({ href = "#", label, target, title }: { href?: string, label: string, target?: string, title?: string }) => (
    <a href={href} className="link" target={target} title={title}>{label}</a>
);

// Inner Container for Main Footer Content
export const FooterInner = ({ children }: { children: ReactNode }) => (
    <div className="inner">
        {children}
    </div>
);

// Content Section (Logo, Info, Links)
export const FooterContent = ({ children }: { children: ReactNode }) => (
    <div className="f-cnt">
        {children}
    </div>
);

// Agency Information Section
export const FooterInfo = ({ children }: { children: ReactNode }) => (
    <div className="f-info">
        {children}
    </div>
);

// Footer Links Section (e.g., Social Media, Go-to Sites)
export const FooterLinks = ({ children }: { children: ReactNode }) => (
    <div className="f-link">
        {children}
    </div>
);

// Bottom Section (Copyright, Identifier)
export const FooterBottom = ({ children }: { children: ReactNode }) => (
    <div className="f-btm">
        {children}
    </div>
);
