import React, { ReactNode, useRef } from 'react';
import { useKRDSInit } from '../hooks/useKRDSInit';

export interface TabItem {
    label: string;
    content: ReactNode;
    active?: boolean;
}

export interface TabsProps {
    items: TabItem[];
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, className = '' }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    // Initialize KRDS tab logic on mount
    useKRDSInit('tab', containerRef);

    return (
        <div ref={containerRef} className={`krds-tab-area layer ${className}`}>
            <div className="tab">
                <ul>
                    {items.map((item, index) => {
                        const uniqueId = `tab-demo-${index}`;
                        const activeClass = item.active ? 'active' : '';
                        return (
                            <li key={index} className={activeClass} aria-controls={uniqueId}>
                                <button type="button" className="btn-tab">{item.label}</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="tab-conts-wrap">
                {items.map((item, index) => {
                    const uniqueId = `tab-demo-${index}`;
                    const activeClass = item.active ? 'active' : '';
                    return (
                        <div key={index} id={uniqueId} className={`tab-conts ${activeClass}`}>
                            <div className="tab-conts-inner">
                                {item.content}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
