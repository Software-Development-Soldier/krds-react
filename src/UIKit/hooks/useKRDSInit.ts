import { useEffect } from 'react';

declare global {
    interface Window {
        krds_accordion?: { init: () => void };
        krds_tab?: { init: () => void };
        krds_modal?: { init: () => void };
    }
}

export type KRDSComponentName = 'accordion' | 'tab' | 'modal';

export const useKRDSInit = (componentNames: KRDSComponentName | KRDSComponentName[]) => {
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
                console.log(`[KRDS] Initializing: ${names.join(', ')}`);
                names.forEach(name => {
                    if (name === 'accordion' && window.krds_accordion) {
                        window.krds_accordion.init();
                    } else if (name === 'tab' && window.krds_tab) {
                        window.krds_tab.init();
                    } else if (name === 'modal' && window.krds_modal) {
                        window.krds_modal.init();
                    }
                });
            } else if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(init, 100);
            } else {
                console.warn(`[KRDS] Failed to find global objects for ${names.join(', ')} after ${maxRetries} retries.`);
            }
        };

        // Initial call
        const timer = setTimeout(init, 0);

        return () => clearTimeout(timer);
    }, [componentNames]);
};
