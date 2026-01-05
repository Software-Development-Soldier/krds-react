import React, { ReactNode } from 'react';
import { useKRDSInit } from '../hooks/useKRDSInit';

export interface AccordionItemProps {
    id: string;
    title: string;
    children: ReactNode;
    isOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, children, isOpen }) => {
    const headerId = `accordionHeader${id}`;
    const collapseId = `accordionCollapse${id}`;

    return (
        <div className="accordion-item">
            <h5 className="accordion-header">
                <button
                    type="button"
                    id={headerId}
                    className="btn-accordion"
                    aria-controls={collapseId}
                    aria-expanded={isOpen}
                >
                    {title}
                </button>
            </h5>
            <div
                id={collapseId}
                className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                aria-labelledby={headerId}
            >
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export interface AccordionProps {
    children: ReactNode;
    className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className = '' }) => {
    useKRDSInit('accordion');

    return (
        <div className={`krds-accordion ${className}`}>
            {children}
        </div>
    );
};
