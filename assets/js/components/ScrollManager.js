import { addEvents } from '../utils/addEvents.js';

export class ScrollManager {
    constructor() {
        this.header = document.querySelector('[data-header]');
        this.backTopBtn = document.querySelector('[data-back-top-btn]');
        this.initialize();
    }

    handleScroll() {
        const isScrolled = window.scrollY > 100;
        this.header.classList.toggle('active', isScrolled);
        this.backTopBtn.classList.toggle('active', isScrolled);
    }

    initialize() {
        addEvents(window, 'scroll', () => this.handleScroll());
    }
}
