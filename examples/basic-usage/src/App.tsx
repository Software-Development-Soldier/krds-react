import React, { useState } from 'react';
import {
    KRDSProvider,
    Accordion,
    AccordionItem,
    Button,
    Masthead,
    Header,
    HeaderUtility,
    HeaderBranding,
    HeaderLogo,
    HeaderActions,
    HeaderNavButton,
    Footer,
    FooterQuick,
    FooterQuickLink,
    FooterInner,
    FooterContent,
    FooterInfo,
    FooterLinks,
    FooterBottom,
    Tabs,
    AlertContainer,
    Alert,
    Modal,
    Pagination,
    useTheme
} from '../../../src/UIKit';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Current Theme: <strong>{theme}</strong></span>
            <Button variant="secondary" onClick={toggleTheme} size="small">
                Toggle Theme
            </Button>
        </div>
    )
}

const MainContent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div style={{ paddingBottom: '5rem' }}>
            <Masthead />
            <Header>
                <HeaderUtility>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Join</a></li>
                    <li><a href="#">Sitemap</a></li>
                </HeaderUtility>
                <HeaderBranding>
                    <HeaderLogo />
                    <HeaderActions>
                        <HeaderNavButton icon="sch" label="Search" className="sch" />
                        <HeaderNavButton icon="all" label="Menu" className="all" />
                    </HeaderActions>
                </HeaderBranding>
            </Header>

            <main className="container" id="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
                <header style={{ marginBottom: '3rem', borderBottom: '1px solid #eee', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1>KRDS React UIKit Example</h1>
                        <p>This page demonstrates the newly wrapped components.</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <ThemeToggle />
                    </div>
                </header>

                <div style={{ display: 'grid', gap: '4rem' }}>
                    <section>
                        <h2>Alerts (Critical Alerts)</h2>
                        <AlertContainer>
                            <Alert type="danger" badgeTitle="Emergency">
                                Severe weather warning: Typhoon approaching the coast. Please stay indoors.
                            </Alert>
                            <Alert type="info" badgeTitle="Notice">
                                System maintenance scheduled for 2026-01-10 from 00:00 to 04:00.
                            </Alert>
                        </AlertContainer>
                    </section>

                    <section>
                        <h2>Buttons</h2>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="tertiary">Tertiary</Button>
                        </div>
                    </section>

                    <section>
                        <h2>Tabs</h2>
                        <Tabs items={[
                            { label: 'Tab 1', content: <div style={{ padding: '2rem', border: '1px solid #ddd' }}>Content for Tab 1</div>, active: true },
                            { label: 'Tab 2', content: <div style={{ padding: '2rem', border: '1px solid #ddd' }}>Content for Tab 2</div> },
                            { label: 'Tab 3', content: <div style={{ padding: '2rem', border: '1px solid #ddd' }}>Content for Tab 3</div> }
                        ]} />
                    </section>

                    <section>
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

                    <section>
                        <h2>Modal</h2>
                        {/* 
                            Note: For standard KRDS JS, use class 'open-modal' and 'data-target'. 
                            Button component props are passed through.
                        */}
                        <Button
                            variant="primary"
                            id="open-modal-btn"
                            className="open-modal"
                            aria-haspopup="dialog"
                            // @ts-ignore - custom attribute for vanilla JS
                            data-target="example-modal"
                        >
                            Open Modal
                        </Button>

                        <Modal id="example-modal" title="Example Modal" size="md">
                            <p>This is a modal dialog provided by KRDS.</p>
                            <p>It includes a title, content area, and action buttons.</p>
                        </Modal>
                    </section>

                    <section>
                        <h2>Pagination</h2>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={15}
                            onPageChange={(p) => setCurrentPage(p)}
                        />
                        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                            Current Page: {currentPage}
                        </div>
                    </section>
                </div>
            </main>

            <Footer>
                <FooterQuick>
                    <FooterQuickLink label="Terms of Service" />
                    <FooterQuickLink label="Privacy Policy" title="Go to Privacy Policy" />
                    <FooterQuickLink label="Copyright Policy" />
                </FooterQuick>
                <FooterInner>
                    <div className="f-logo"></div>
                    <FooterContent>
                        <FooterInfo>
                            <div className="info-addr">
                                <address>123 Government Complex, Sejong-si, Republic of Korea</address>
                            </div>
                        </FooterInfo>
                        <FooterLinks>
                            <div className="link-sns">
                                <a href="#">Facebook</a>
                                <a href="#">Twitter</a>
                                <a href="#">Youtube</a>
                            </div>
                        </FooterLinks>
                    </FooterContent>
                    <FooterBottom>
                        <div className="f-btm-text">
                            <div className="f-copy">© 2026 Government of the Republic of Korea. All rights reserved.</div>
                        </div>
                    </FooterBottom>
                </FooterInner>
            </Footer>
        </div>
    );
};

const App = () => {
    return (
        <KRDSProvider injectScript={true} mode="light">
            <MainContent />
        </KRDSProvider>
    );
};

export default App;
