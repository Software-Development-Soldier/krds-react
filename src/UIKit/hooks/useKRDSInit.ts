import { useEffect, RefObject } from 'react';

declare global {
    interface Window {
        krds_accordion?: {
            init: (container?: HTMLElement | Document) => void;
            destroy?: (container?: HTMLElement | Document) => void;
        };
        krds_tab?: {
            init: (container?: HTMLElement | Document) => void;
            destroy?: (container?: HTMLElement | Document) => void;
        };
        krds_modal?: {
            init: (container?: HTMLElement | Document) => void;
            destroy?: (container?: HTMLElement | Document) => void;
        };
    }
}

export type KRDSComponentName = 'accordion' | 'tab' | 'modal';

export const useKRDSInit = (
    componentNames: KRDSComponentName | KRDSComponentName[],
    ref?: RefObject<HTMLElement>
) => {
    useEffect(() => {
        const names = Array.isArray(componentNames) ? componentNames : [componentNames];
        let retryCount = 0;
        const maxRetries = 50; // Try for 5 seconds

        const init = () => {
            let allAvailable = true;
            names.forEach(name => {
                const globalName = `krds_${name}` as keyof Window;
                if (!window[globalName]) {
                    allAvailable = false;
                }
            });

            if (allAvailable) {
                const container = ref?.current || document;
                console.log(`[KRDS] Initializing: ${names.join(', ')} in ${container === document ? 'document' : 'scoped container'}`);

                names.forEach(name => {
                    const globalName = `krds_${name}` as keyof Window;
                    const component = window[globalName] as any;
                    if (component && typeof component.init === 'function') {
                        component.init(container);
                    }
                });
            } else if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(init, 100);
            } else {
                console.warn(`[KRDS] Failed to find global objects for ${names.join(', ')} after ${maxRetries} retries.`);
            }
        };

        // Delay to ensure React has finished rendering the DOM
        const timer = setTimeout(init, 0);

        return () => {
            clearTimeout(timer);
            const container = ref?.current || document;
            names.forEach(name => {
                const globalName = `krds_${name}` as keyof Window;
                const component = window[globalName] as any;
                if (component && typeof component.destroy === 'function') {
                    console.log(`[KRDS] Destroying: ${name}`);
                    component.destroy(container);
                }
            });
        };
    }, [componentNames, ref]);
};
