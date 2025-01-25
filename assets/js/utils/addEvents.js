const EventHandler = (() => {
    const addEvents = (elements, eventType, callback) => {
        if (elements instanceof NodeList) {
            for (const element of elements) element.addEventListener(eventType, callback);
        } else if (elements instanceof HTMLElement) {
            elements.addEventListener(eventType, callback);
        }
    };

    return Object.freeze({ addEvents });
})();

export default EventHandler;