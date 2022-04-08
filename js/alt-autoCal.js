FrontendApiManager.onReady("submissionForm", function(api) {
    'use strict';
    let fieldsObject = {};
    const MAX_SETS = $(":input").length;
    let $sumFields = $('.sum-alt-field');
    let $subtractFields = $('.subtract-alt-field');
    let $multiplyFields = $('.multiply-alt-field');
    let $divideFields = $('.divide-alt-field');
    $.fn.extend({
        sum: function() {
            return this.map((i, v) => Number(v.value)).toArray().reduce((t, i) => t + i);
        },
        subtract: function() {
            const numberArray = this.map((i, v) => Number(v.value)).toArray();
            const firstValue = numberArray.shift();
            return numberArray.reduce((t, i) => t - i, firstValue);
        },
        multiply: function() {
            return this.map((i, v) => Number(v.value)).toArray().reduce((t, i) => t * i);
        },
        divide: function() {
            return this.map((i, v) => Number(v.value)).toArray().reduce((t, i) => t / i);
        },
    });
    const keyUpSum = (event) => {
        let set = event.currentTarget.dataset.setalt;
        let $sumFields = $(`.setalt-${set} input[type='text']`);
        let $sumDisplay = $(`.setalt-${set}-total input[type='text']`);
        $sumDisplay.val($sumFields.sum()).keyup();
    };
    const keyUpSubtract = (event) => {
        let set = event.currentTarget.dataset.setalt;
        let $subtrahends = $(`.setalt-${set}`).find('input[type=text]');
        let $sumDisplay = $(`.setalt-${set}-total input[type='text']`);
        $sumDisplay.val($subtrahends.subtract()).keyup();
    };
    const keyUpMultiply = (event) => {
        let set = event.currentTarget.dataset.setalt;
        let $factors = $(`.setalt-${set} input[type='text']`);
        let $productDisplay = $(`.setalt-${set}-total input[type='text']`);
        $productDisplay.val($factors.multiply()).keyup();
    };
    const keyUpDivide = (event) => {
        let set = event.currentTarget.dataset.setalt;
        let $factors = $(`.setaltalt-${set} input[type='text']`);
        let $productDisplay = $(`.setalt-${set}-total input[type='text']`);
        $productDisplay.val($factors.divide()).keyup();
    };
    for (let i = 1; i <= MAX_SETS; i++) {
        fieldsObject[i] = $sumFields.filter('.setalt-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSum);
        fieldsObject[i] = $subtractFields.filter('.setalt-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSubtract);
        fieldsObject[i] = $multiplyFields.filter('.setalt-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpMultiply);
        fieldsObject[i] = $divideFields.filter('.setalt-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpDivide);
    };
});
