$.fn.extend({
    createObserver: function(callback, config) {
        config = config || {
            childList: true
        };
        if (!!!window.systemObservers || !Array.isArray(window.systemObservers)) window.systemObservers = [];
        var newObserver = new MutationObserver(callback);
        newObserver.observe(this[0], config);
        window.systemObservers.push(newObserver);
        return this;
    }
});