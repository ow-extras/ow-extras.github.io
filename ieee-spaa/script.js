FrontendApiManager.onReady("submissionForm", function(api) {
    if (window.location.href.includes('/a/organizations/main/submissions/') || (window.location.href.includes('/a/admin/organizations/main/solicitations/'))) {
        $(window).load(function() {
            $(".read-only").each(function() {
                $(this).find("input[type=text]").attr("readonly", true);
            });
            $('.number').on("keypress", (e) => {
                if (isNaN(parseInt(e.key, 10)) && e.key !== "Backspace" && e.key !== "Enter") {
                    e.preventDefault();
                }
            });
        });

        $.fn.extend({
            setReadOnly: function(state) {
                state = state || true;
                this[0].readOnly = state;
                this[0].tabIndex = (state) ? -1 : 0;
                return this;
            },
            createObserver: function(callback, config) {
                config = config || {
                    childList: true
                };
                if (!!!window.systemObservers || !Array.isArray(window.systemObservers)) window.systemObservers = [];
                var newObserver = new MutationObserver(callback);
                newObserver.observe(this[0], config);
                window.systemObservers.push(newObserver);
                return this;
            },
        });
        // "Attendee Number Estimate" times "Ticket Price" to "Total Ticket Income"
        var $price = $(".ticket-price input[type=text]");
        var $attendees = $(".attendee-estimate input[type=text]");
        var $ticketTotal = $(".ticket-total input[type=text]");
        var $fundingTotal = $(".funding-total input[type=text]");
        var $incomeTotal = $(".total-income input[type=text]");
        var $expensesTotal = $(".expenses-total input[type=text]");
        var $total = $(".spax-request input[type=text]");
        var $incomeTable = $(".income-table tbody");
        var $expensesTotal = $(".expenses-total input[type=text]");
        var $expensesTable = $(".expenses-table tbody");
        // "Total Ticket Income" plus "Total Funding Income" to "Total Income"
        var calculateIncomeTotal = function() {
            var sum = 0;
            sum = Number($ticketTotal.val()) + Number($fundingTotal.val());
            $incomeTotal.val(sum);
        };
        // "Total Expenses" minus "Total Income" to "Amount Needed From SPAx"
        var calculateSpaxTotal = function() {
            var sum = 0;
            sum = Number($expensesTotal.val()) - Number($incomeTotal.val());
            $total.val(sum);
        };
        var calculateAttendeeTotal = function() {
            var ticketSum = Number($attendees.val()) * Number($price.val());
            $ticketTotal.val(ticketSum).change();
            calculateIncomeTotal();
            calculateSpaxTotal();
        };
        // Income Table, "amount" items summed to "Total Funding Income"
        var calculateIncomeTable = function() {
            var total = 0;
            $(".income-amount-item").each(function() {
                total += Number(this.innerText);
            });
            $fundingTotal.val(total).change();
            calculateIncomeTotal();
            calculateSpaxTotal();
        };
        // Expenses Table, "cost" items summed to "Total Expenses"
        var calculateExpensesTable = function() {
            var total = 0;
            $(".expenses-amount-item").each(function() {
                total += Number(this.innerText);
            });
            $expensesTotal.val(total).change();
            calculateSpaxTotal();
        };
        // on-load
        calculateAttendeeTotal();
        // update on keyup
        $price.add($attendees).keyup(calculateAttendeeTotal);
        // create observers
        $incomeTable.createObserver(calculateIncomeTable);
        $expensesTable.createObserver(calculateExpensesTable);
    }
});