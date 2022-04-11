FrontendApiManager.onReady("submissionForm", function(api) {
    'use strict';
    let fieldsObject = {};
    const MAX_SETS = $(":input").length;
    let $sumField = $('.sumfield');
    let $subtractField = $('.subtractfield');
    let $multiplyField = $('.multiplyfield');
    let $divideField = $('.dividefield');
    let e = $.Event('keyup');
    e.keyCode= 13;    
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
        let $sumFields = $(`.group-${set} input[type='text']`);
        let $sumDisplay = $(`.group-${set}-total input[type='text']`);
        $sumDisplay.val($sumFields.sum()).keyup();
    };
    const keyUpSubtract = (event) => {
        let set = event.currentTarget.dataset.set;
        let $subtrahends = $(`.group-${set}`).find('input[type=text]');
        let $sumDisplay = $(`.group-${set}-total input[type='text']`);
        $sumDisplay.val($subtrahends.subtract()).keyup();
    };
    const keyUpMultiply = (event) => {
        let set = event.currentTarget.dataset.set;
        let $factors = $(`.group-${set} input[type='text']`);
        let $productDisplay = $(`.group-${set}-total input[type='text']`);
        $productDisplay.val($factors.multiply()).keyup();
    };
    const keyUpDivide = (event) => {
        let set = event.currentTarget.dataset.set;
        let $factors = $(`.group-${set} input[type='text']`);
        let $productDisplay = $(`.group-${set}-total input[type='text']`);
        $productDisplay.val($factors.divide()).keyup();
    };
    for (let i = 1; i <= MAX_SETS; i++) {
        fieldsObject[i] = $sumField.filter('.group-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSum);
        fieldsObject[i] = $subtractField.filter('.group-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpSubtract);
        fieldsObject[i] = $multiplyField.filter('.group-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpMultiply);
        fieldsObject[i] = $divideField.filter('.group-' + i).find('input[type=text]').attr('data-set', i).keyup(keyUpDivide);
    };
    function updateTotals () { $('div input').trigger(e); }
    setInterval(updateTotals, 1000); 
});
