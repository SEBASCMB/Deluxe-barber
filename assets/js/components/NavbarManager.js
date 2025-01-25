import { addEvents } from '../utils/addEvents.js';

export class NavbarManager {
    constructor() {
        this.navbar = document.querySelector('[data-navbar]');
        this.navToggler = document.querySelector('[data-nav-toggler]');
        this.navLinks = document.querySelectorAll('[data-nav-link]');
        this.initialize();
    }

    toggleNavbar() { this.navbar.classList.toggle('active'); }
    closeNavbar() { this.navbar.classList.remove('active'); }

    initialize() {
        addEvents(this.navToggler, 'click', () => this.toggleNavbar());
        addEvents(this.navLinks, 'click', () => this.closeNavbar());
    }
}