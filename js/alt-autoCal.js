FrontendApiManager.onReady("submissionForm", function(api) {
    'use strict';
    let fieldsObject = {};
    const MAX_SETS = $(":input").length;
    let $sumFields = $('.alt-sum-field');
    let $subtractFields = $('.alt-subtract-field');
    let $multiplyFields = $('.alt-multiply-field');
    let $divideFields = $('.alt-divide-field');
    $.fn.extend({
        altsum: function() {
            return this.map((i, v) => Number(v.value)).toArray().reduce((t, i) => t + i);
        },
        altsubtract: function() {
            const numberArray = this.map((i, v) => Number(v.value)).toArray();
            const firstValue = numberArray.shift();
            return numberArray.reduce((t, i) => t - i, firstValue);
        },
        altmultiply: function() {
            return this.map((i, v) => Number(v.value)).toArray().reduce((t, i) => t * i);
        },
        altdivide: function() {
            return this.map((i, v) => Number(v.value)).toArray().reduce((t, i) => t / i);
        },
    });
    const keyUpSum = (event) => {
        let set = event.currentTarget.dataset.set;
        let $sumFields = $(`.alt-set-${set} input[type='text']`);
        let $sumDisplay = $(`.alt-set-${set}-total input[type='text']`);
        $sumDisplay.val($sumFields.altsum()).keyup();
    };
    const keyUpSubtract = (event) => {
        let set = event.currentTarget.dataset.set;
        let $subtrahends = $(`.alt-set-${set}`).find('input[type=text]');
        let $sumDisplay = $(`.alt-set-${set}-total input[type='text']`);
        $sumDisplay.val($subtrahends.altsubtract()).keyup();
    };
    const keyUpMultiply = (event) => {
        let set = event.currentTarget.dataset.set;
        let $factors = $(`.alt-set-${set} input[type='text']`);
        let $productDisplay = $(`.alt-set-${set}-total input[type='text']`);
        $productDisplay.val($factors.altmultiply()).keyup();
    };
    const keyUpDivide = (event) => {
        let set = event.currentTarget.dataset.set;
        let $factors = $(`.alt-set-${set} input[type='text']`);
        let $productDisplay = $(`.alt-set-${set}-total input[type='text']`);
        $productDisplay.val($factors.altdivide()).keyup();
    };
    for (let i = 1; i <= MAX_SETS; i++) {
        fieldsObject[i] = $sumFields.filter('.alt-set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSum);
        fieldsObject[i] = $subtractFields.filter('.alt-set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSubtract);
        fieldsObject[i] = $multiplyFields.filter('.alt-set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpMultiply);
        fieldsObject[i] = $divideFields.filter('.alt-set-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpDivide);
    };
});
