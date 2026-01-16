import React, { ReactNode, useRef } from 'react';
import { useKRDSInit } from '../hooks/useKRDSInit';

export interface ModalProps {
    id: string; // Required for targeting via aria-controls
    title: string;
    children: ReactNode;
    actions?: ReactNode;
    size?: "sm" | "md" | "lg";
    type?: "default" | "full" | "bottom-sheet";
    className?: string;
}

export const Modal: React.FC<ModalProps> = ({
    id,
    title,
    children,
    actions,
    size,
    type,
    className = ''
}) => {
    const ref = useRef<HTMLDivElement>(null);
    useKRDSInit('modal', ref);

    const sizeClass = size ? `modal-${size}` : '';

    return (
        <div
            id={id}
            ref={ref}
            className={`krds-modal ${className}`}
            {...(type ? { "data-type": type } : {})}
        >
            <div className="modal-back"></div>
            <div className={`modal-dialog ${sizeClass}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">{title}</h2>
                        <button type="button" className="btn-close close-modal" aria-label="Close Modal"></button>
                    </div>
                    <div className="modal-conts">
                        <div className="conts-area">
                            {children}
                        </div>
                    </div>
                    {actions && (
                        <div className="modal-btn">
                            {actions}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
