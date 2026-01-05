import React from 'react';
import { KRDSProvider, Accordion, AccordionItem, Button } from '../../../src/UIKit';

const MainContent = () => {

    // Actually, let's use the exported hook if possible. But in this mocked example file I need to import it.
    // However, I can't easily import useTheme from inside the same file if I am defining the component here.
    // Let's rely on the package export structure.

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', transition: 'background-color 0.3s, color 0.3s' }}>
            <header style={{ marginBottom: '3rem', borderBottom: '1px solid #eee', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>KRDS React UIKit Example</h1>
                    <p>This is a sample page demonstrating the wrapped components.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <ThemeToggle />
                </div>
            </header>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Buttons</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="tertiary">Tertiary Button</Button>
                </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Accordion</h2>
                <Accordion>
                    <AccordionItem id="01" title="What is KRDS?">
                        KRDS stands for Korea Responsive Design System, designed for digital government services.
                    </AccordionItem>
                    <AccordionItem id="02" title="How to use this component?">
                        Simply import Accordion and AccordionItem, and nested them as shown in this example.
                    </AccordionItem>
                    <AccordionItem id="03" title="Is it accessible?">
                        Yes, it uses the original KRDS accessibility logic provided by the official design system.
                    </AccordionItem>
                </Accordion>
            </section>

            <footer style={{ marginTop: '5rem', opacity: 0.6, fontSize: '0.9rem' }}>
                &copy; 2026 KRDS React UIKit Project
            </footer>
        </div>
    );
};

// Seperate component to safely use the hook
import { useTheme } from '../../../src/UIKit';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Current Theme: <strong>{theme}</strong></span>
            <Button variant="secondary" onClick={toggleTheme} size="small">
                Toggle Theme
            </Button>
        </div>
    )
}

const App = () => {
    return (
        <KRDSProvider injectScript={false} mode="light">
            <MainContent />
        </KRDSProvider>
    );
};

export default App;
