import EventHandler from '../utils/addEvents.js';

const ComponentFactory = (type, config) => {
    const components = {
        NavbarManager: () => ({
            init() {
                const navbar = document.querySelector(config.selector);
                const toggler = document.querySelector(config.toggler);
                const navLinks = document.querySelectorAll(config.links);
                
                EventHandler.addEvents(toggler, 'click', () => {
                    navbar.classList.toggle('active');
                });

                for (const link of navLinks) {
                    EventHandler.addEvents(link, 'click', () => {
                        navbar.classList.remove('active');
                    });
                }
            }
        }),
        
        ScrollManager: () => ({
            init() {
                const header = document.querySelector(config.header);
                const backBtn = document.querySelector(config.backBtn);
                
                const handler = () => {
                    const isScrolled = window.scrollY > 100;
                    header.classList.toggle('active', isScrolled);
                    backBtn.classList.toggle('active', isScrolled);
                };
                
                EventHandler.addEvents(window, 'scroll', handler);
            }
        })
    };

    return components[type]?.() || null;
};

export default ComponentFactory;