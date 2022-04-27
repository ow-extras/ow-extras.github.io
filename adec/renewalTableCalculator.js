if (window.location.href.indexOf("submissions/details") > -1) {
    FrontendApiManager.onReady("submissionForm", function(api) {
        $(window).load(function() {
            $(".read-only").each(function() {
                $(this).find("input[type=text]").attr("readonly", true);
            });
            $('.number').on('keypress', function(e) {
                return e.metaKey || // cmd/ctrl
                    e.which <= 0 || // arrow keys
                    e.which == 8 || // delete key
                    /[0-9]/.test(String.fromCharCode(e.which)); // numbers
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

        var $cat1Total = $(".cat-1-total input[type=text]");
        var $cat1Table = $(".cat-1-table tbody");
        var $cat1aTotal = $(".cat-1a-total input[type=text]");
        var $cat1aTable = $(".cat-1a-table tbody");
        var $cat2Total = $(".cat-2-total input[type=text]");
        var $cat2Table = $(".cat-2-table tbody");
        var $cat2aTotal = $(".cat-2a-total input[type=text]");
        var $cat2aTable = $(".cat-2a-table tbody");
        var $cat3Total = $(".cat-3-total input[type=text]");
        var $cat3Table = $(".cat-3-table tbody");
        var $cat3aTotal = $(".cat-3a-total input[type=text]");
        var $cat3aTable = $(".cat-3a-table tbody");
        var $cat4Total = $(".cat-4-total input[type=text]");
        var $cat4Table = $(".cat-4-table tbody");
        var $cat4aTotal = $(".cat-4a-total input[type=text]");
        var $cat4aTable = $(".cat-4a-table tbody");
        // var $cat5Total = $(".cat-5-total input[type=text]");
        // var $cat5Table = $(".cat-5-table tbody");
        var $cat5aTotal = $(".cat-5a-total input[type=text]");
        var $cat5aTable = $(".cat-5a-table tbody");
        var $cat6Total = $(".cat-6-total input[type=text]");
        var $cat6Table = $(".cat-6-table tbody");
        var $cat7Total = $(".cat-7-total input[type=text]");
        var $cat7Table = $(".cat-7-table tbody");
        var $group1Total = $(".group-1-total input[type=text]");
        var $group2Total = $(".group-2-total input[type=text]");
        var calulateCat1 = function() {
            var total = 0;
            $(".cat-1-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat1Total.val(total).change();
            calculateGroupTotals();
        };
        var calulateCat1a = function() {
            var total = 0;
            $(".cat-1a-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat1aTotal.val(total).change();
            calculateGroupTotals();
        };
        var calulateCat2 = function() {
            var total = 0;
            $(".cat-2-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat2Total.val(total).change();
            calculateGroupTotals();
        };
        var calulateCat2a = function() {
            var total = 0;
            $(".cat-2a-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat2aTotal.val(total).change();
            calculateGroupTotals();
        };
        var calulateCat3 = function() {
            var total = 0;
            $(".cat-3-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat3Total.val(total).change();
            calculateGroupTotals();
        };
        var calulateCat3a = function() {
            var total = 0;
            $(".cat-3a-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat3aTotal.val(total).change();
            calculateGroupTotals();
        };
        var calulateCat4 = function() {
            var total = 0;
            $(".cat-4-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat4Total.val(total).change();
            calculateGroupTotals();
        };
        var calulateCat4a = function() {
            var total = 0;
            $(".cat-4a-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat4aTotal.val(total).change();
            calculateGroupTotals();
        };
        // var calulateCat5 = function() {
        //     var total = 0;
        //     $(".cat-5-hours").each(function() {
        //         total += Number(this.innerText);
        //     });
        //     $cat5Total.val(total).change();
        //     calculateGroupTotals();
        // };
        var calulateCat5a = function() {
            var total = 0;
            $(".cat-5a-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat5aTotal.val(total).change();
            calculateGroupTotals();
        };
        var calulateCat6 = function() {
            var total = 0;
            $(".cat-6-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat6Total.val(total).change();
            calculateGroupTotals();
        };
        var calulateCat7 = function() {
            var total = 0;
            $(".cat-7-hours").each(function() {
                total += Number(this.innerText);
            });
            $cat7Total.val(total).change();
            calculateGroupTotals();
        };
        var calculateGroupTotals = function() {
            var sum = 0;
            sum = Number($cat1Total.val()) + Number($cat2Total.val()) + Number($cat3Total.val()) + Number($cat4Total.val()));
            $group1Total.val(sum);
            var sum = 0;
            sum = Number($cat1aTotal.val()) + Number($cat2aTotal.val()) + Number($cat3aTotal.val()) + Number($cat4aTotal.val() + Number($cat5aTotal.val() + Number($cat6Total.val()) + Number($cat7Total.val());
            $group2Total.val(sum);
        };

        calulateCat1();
        calulateCat1a();
        calulateCat2();
        calulateCat2a();
        calulateCat3();
        calulateCat3a();
        calulateCat4();
        calulateCat4a();
        // calulateCat5();
        calulateCat5a();
        calulateCat6();
        calulateCat7();
        $cat1Table.createObserver(calulateCat1);
        $cat1aTable.createObserver(calulateCat1a);
        $cat2Table.createObserver(calulateCat2);
        $cat2aTable.createObserver(calulateCat2a);
        $cat3Table.createObserver(calulateCat3);
        $cat3aTable.createObserver(calulateCat3a);
        $cat4Table.createObserver(calulateCat4);
        $cat4aTable.createObserver(calulateCat4a);
        // $cat5Table.createObserver(calulateCat5);
        $cat5aTable.createObserver(calulateCat5a);
        $cat6Table.createObserver(calulateCat6);
        $cat7Table.createObserver(calulateCat7);
    });
};
