// add set-1 and sum-field as classes to add fields
// add set-1-total for sum of all 'set-1 sum-field' fields
FrontendApiManager.onReady("submissionForm", function(api) {
    $(window).load(function() {
        var $sumFields = $('.sum-field');
        var fieldsObject = {};
        var MAX_SETS = $(":input").length;
        var i;
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
        for (i = 1; i <= MAX_SETS; i++) {
            fieldsObject[i] = $sumFields.filter('.set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSum);
        };
        $('.submit .save').attr('onClick', 'window.location.reload();');
    });
});