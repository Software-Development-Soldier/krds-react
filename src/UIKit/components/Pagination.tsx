import React, { useMemo } from 'react';

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    prevLabel?: string;
    nextLabel?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    className = '',
    prevLabel = "이전",
    nextLabel = "다음"
}) => {

    const pages = useMemo(() => {
        const items: (number | 'dot')[] = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) items.push(i);
        } else {
            if (currentPage <= 4) {
                for (let i = 1; i <= 5; i++) items.push(i);
                items.push('dot');
                items.push(totalPages);
            } else if (currentPage >= totalPages - 3) {
                items.push(1);
                items.push('dot');
                for (let i = totalPages - 4; i <= totalPages; i++) items.push(i);
            } else {
                items.push(1);
                items.push('dot');
                items.push(currentPage - 1);
                items.push(currentPage);
                items.push(currentPage + 1);
                items.push('dot');
                items.push(totalPages);
            }
        }
        return items;
    }, [currentPage, totalPages]);

    return (
        <div className={`krds-pagination ${className}`}>
            <button
                type="button"
                className={`page-navi prev ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
            >
                {prevLabel}
            </button>

            <div className="page-links">
                {pages.map((p, i) => {
                    if (p === 'dot') {
                        return (
                            <span key={`dot-${i}`} className="page-link link-dot" aria-hidden="true" title="More pages"></span>
                        );
                    }
                    return (
                        <button
                            key={p}
                            type="button"
                            className={`page-link ${p === currentPage ? 'active' : ''}`}
                            onClick={() => onPageChange(p as number)}
                            aria-current={p === currentPage ? 'page' : undefined}
                        >
                            {p}
                        </button>
                    );
                })}
            </div>

            <button
                type="button"
                className={`page-navi next ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
            >
                {nextLabel}
            </button>
        </div>
    );
};
