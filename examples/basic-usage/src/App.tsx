import React from 'react';
import { KRDSProvider, Accordion, AccordionItem, Button } from '../../../src/UIKit';

const App = () => {
    return (
        <KRDSProvider injectScript={false}> {/* script already in html */}
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
                <header style={{ marginBottom: '3rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <h1>KRDS React UIKit Example</h1>
                    <p>This is a sample page demonstrating the wrapped components.</p>
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

                <footer style={{ marginTop: '5rem', color: '#666', fontSize: '0.9rem' }}>
                    &copy; 2026 KRDS React UIKit Project
                </footer>
            </div>
        </KRDSProvider>
    );
};

export default App;
