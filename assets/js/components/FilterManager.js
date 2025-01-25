import EventHandler from '../utils/addEvents.js';
import Observable from '../core/Observable.js';

class FilterManager extends Observable {
    constructor() {
        super();
        this.strategies = {
            all: items => {
                for (const item of items) item.style.display = 'block';
            },
            category: (items, category) => {
                for (const item of items) {
                    item.style.display = item.dataset.filter === category ? 'block' : 'none';
                }
            }
        };
    }

    init() {
        const filterBtns = document.querySelectorAll('[data-filter-btn]');
        const filterItems = document.querySelectorAll('[data-filter]');
        
        for (const btn of filterBtns) {
            EventHandler.addEvents(btn, 'click', (e) => {
                this.notify({ type: 'filter-changed', value: e.currentTarget.dataset.filterBtn });
                this.applyStrategy(e.currentTarget.dataset.filterBtn, filterItems);
            });
        }
    }

    applyStrategy(filterType, items) {
        if (filterType === 'all') {
            this.strategies.all(items);
        } else {
            this.strategies.category(items, filterType);
        }
    }
}

export default FilterManager;