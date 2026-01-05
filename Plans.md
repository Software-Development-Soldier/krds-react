# KRDS React UIKit: Accordion Implementation Plan

This document provides a concrete look at how we will wrap KRDS components into React, specifically focusing on the `Accordion` component as a reference.

## 1. Core Synchronization Hook
To bridge the gap between React's declarative nature and KRDS's imperative vanilla JS, we'll use a `useKRDSInit` hook.

### [NEW] `src/UIKit/hooks/useKRDSInit.ts`
```tsx
import { useEffect } from 'react';

// Assuming we expose the global KRDS object from ui-script.js
declare global {
  interface Window {
    krds_accordion?: { init: () => void };
    // ... add other component types as needed
  }
}

export const useKRDSInit = (componentName: 'accordion' | 'tab' | 'modal') => {
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered before KRDS scan
    const timer = setTimeout(() => {
      if (componentName === 'accordion' && window.krds_accordion) {
        window.krds_accordion.init();
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);
};
```

## 2. Accordion Component
Based on `html/code/accordion.html`.

### [NEW] `src/UIKit/components/Accordion.tsx`
```tsx
import React, { ReactNode } from 'react';
import { useKRDSInit } from '../hooks/useKRDSInit';

interface AccordionItemProps {
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

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className = '' }) => {
  // Trigger KRDS JS initialization on mount
  useKRDSInit('accordion');

  return (
    <div className={`krds-accordion ${className}`}>
      {children}
    </div>
  );
};
```

## 3. Usage Example
```tsx
import { Accordion, AccordionItem } from './UIKit/components/Accordion';

function App() {
  return (
    <Accordion>
      <AccordionItem id="Sample01" title="아코디언 타이틀 1">
        내용 영역 1
      </AccordionItem>
      <AccordionItem id="Sample02" title="아코디언 타이틀 2">
        내용 영역 2
      </AccordionItem>
    </Accordion>
  );
}
```

## Next Steps
- [ ] Refactor `ui-script.js` to avoid multiple global init runs if it scans the whole document.
- [ ] Determine if SCSS should be imported component-by-component or globally via a Theme Provider.
