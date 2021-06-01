// to use: give table a class of sum-table and in the Field Template wrap the item to count in a span with sum-item as a class. 
// support for other operators coming soon

FrontendApiManager.onReady("submissionForm", function(api) {
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

    let $sumTable = $(".sum-table tbody");
    let $sumTotal = $(".sum-total input[type=text]");
    const calculateSumTotal = function() {
        let total = 0;
        $(".sum-item").each(function() {
            total += Number(this.innerText);
        });
        $sumTotal.val(total).change();
    };

    $sumTable.createObserver(calculateSumTotal);
});