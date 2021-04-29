FrontendApiManager.onReady("submissionForm", function(api) {
    $(window).load(function() {
        var fieldsObject = {};
        var MAX_SETS = $(":input").length;
        var i;
        var $sumFields = $('.sum-field');
        var $subtractFields = $('.subtract-field');
        var $multiplyFields = $('.multiply-field');
        var $divideFields = $('.divide-field');

        var keyUpSum = function(event) {
            var set = event.currentTarget.dataset.set,
                sum = 0,
                $form = $("form"),
                $summands = $form.find(".set-" + set + " input[type='text']"),
                $sumDisplay = $form.find(".set-" + set + "-total input[type='text']");
            $summands.each(function() {
                var value = Number($(this).val());
                if (!isNaN(value)) sum += value;
            });
            $sumDisplay.val(sum);
            $sumDisplay.keyup();
        };

        var keyUpSubtract = function(event) {
            var sum;
            var set = event.currentTarget.dataset.set,
                $form = $("form"),
                $subtrahends = $form.find(".set-" + set + " input[type='text']"),
                $sumDisplay = $form.find(".set-" + set + "-total input[type='text']");
            var list = [];
            $subtrahends.each(function() {
                var value = Number($(this).val());
                if (!isNaN(value)) { list.push(value) };
            });
            sum = list.reduce((total, amount) => total - amount);
            $sumDisplay.val(sum);
            $sumDisplay.keyup();
        };

        var keyUpMultiply = function(event) {
            var product;
            var set = event.currentTarget.dataset.set,
                $form = $("form"),
                $factors = $form.find(".set-" + set + " input[type='text']"),
                $productDisplay = $form.find(".set-" + set + "-total input[type='text']");
            var list = [];
            $factors.each(function() {
                var value = Number($(this).val());
                if (!isNaN(value)) { list.push(value) };
            });
            product = list.reduce((total, amount) => total * amount);
            console.log(product);
            $productDisplay.val(product);
            $productDisplay.keyup();
        };

        var keyUpDivide = function(event) {
            var product;
            var set = event.currentTarget.dataset.set,
                $form = $("form"),
                $factors = $form.find(".set-" + set + " input[type='text']"),
                $productDisplay = $form.find(".set-" + set + "-total input[type='text']");
            var list = [];
            $factors.each(function() {
                var value = Number($(this).val());
                if (!isNaN(value)) { list.push(value) };
            });
            product = list.reduce((total, amount) => total / amount);
            console.log(product);
            $productDisplay.val(product);
            $productDisplay.keyup();
        };

        for (i = 1; i <= MAX_SETS; i++) {
            fieldsObject[i] = $sumFields.filter('.set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSum);
            fieldsObject[i] = $subtractFields.filter('.set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSubtract);
            fieldsObject[i] = $multiplyFields.filter('.set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpMultiply);
            fieldsObject[i] = $divideFields.filter('.set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpDivide);
        };
    });
});