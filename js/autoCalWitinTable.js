$('.set-1-total').waitUntilExists(function() {
    'use strict';
    let fieldsObject = {};
    const MAX_SETS = $(":input").length;
    let $sumFields = $('.sum-field');
    let $subtractFields = $('.subtract-field');
    let $multiplyFields = $('.multiply-field');
    let $divideFields = $('.divide-field');
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
        let set = event.currentTarget.dataset.set;
        let $sumFields = $(`.set-${set} input[type='text']`);
        let $sumDisplay = $(`.set-${set}-total input[type='text']`);
        $sumDisplay.val($sumFields.sum()).keyup();
    };
    const keyUpSubtract = (event) => {
        let set = event.currentTarget.dataset.set;
        let $subtrahends = $(`.set-${set}`).find('input[type=text]');
        let $sumDisplay = $(`.set-${set}-total input[type='text']`);
        $sumDisplay.val($subtrahends.subtract()).keyup();
    };
    const keyUpMultiply = (event) => {
        let set = event.currentTarget.dataset.set;
        let $factors = $(`.set-${set} input[type='text']`);
        let $productDisplay = $(`.set-${set}-total input[type='text']`);
        $productDisplay.val($factors.multiply()).keyup();
    };
    const keyUpDivide = (event) => {
        let set = event.currentTarget.dataset.set;
        let $factors = $(`.set-${set} input[type='text']`);
        let $productDisplay = $(`.set-${set}-total input[type='text']`);
        $productDisplay.val($factors.divide()).keyup();
    };
    for (let i = 1; i <= MAX_SETS; i++) {
        fieldsObject[i] = $sumFields.filter('.set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSum);
        fieldsObject[i] = $subtractFields.filter('.set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSubtract);
        fieldsObject[i] = $multiplyFields.filter('.set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpMultiply);
        fieldsObject[i] = $divideFields.filter('.set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpDivide);
    };
});