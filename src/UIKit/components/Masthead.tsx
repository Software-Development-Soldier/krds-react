import React from 'react';

export interface MastheadProps {
    className?: string;
    /**
     * Text to display in the masthead.
     * Defaults to "이 누리집은 대한민국 공식 전자정부 누리집입니다."
     */
    text?: string;
}

/**
 * Masthead (Official Banner) component.
 * Displays the official government website banner.
 */
export const Masthead: React.FC<MastheadProps> = ({
    className = '',
    text = '이 누리집은 대한민국 공식 전자정부 누리집입니다.'
}) => {
    return (
        <div id="krds-masthead" className={className}>
            <div className="toggle-head">
                <div className="inner">
                    <span className="nuri-txt">{text}</span>
                </div>
            </div>
        </div>
    );
};
