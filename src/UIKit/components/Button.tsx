import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    children,
    className = '',
    ...props
}) => {
    const variantClass = variant === 'primary' ? 'primary' : variant === 'secondary' ? 'secondary' : 'tertiary';
    const sizeClass = size === 'small' ? 'sm' : size === 'large' ? 'lg' : ''; // Guessed mapping, can refine

    return (
        <button
            type="button"
            className={`krds-btn ${variantClass} ${sizeClass} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
};
