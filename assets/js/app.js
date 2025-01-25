import ComponentFactory from './core/ComponentFactory.js';
import FilterManager from './components/FilterManager.js';

document.addEventListener('DOMContentLoaded', () => {
    // Factory Implementation
    const navbar = ComponentFactory('NavbarManager', {
        selector: '[data-navbar]',
        toggler: '[data-nav-toggler]',
        links: '[data-nav-link]'
    });
    
    const scrollManager = ComponentFactory('ScrollManager', {
        header: '[data-header]',
        backBtn: '[data-back-top-btn]'
    });

    // Observer Implementation
    const filterManager = new FilterManager();
    
    filterManager.subscribe({
        update: (data) => {
            if (data.type === 'filter-changed') {
                console.log('Filtro actualizado:', data.value);
            }
        }
    });

    // Initialize components
    navbar.init();
    scrollManager.init();
    filterManager.init();
});