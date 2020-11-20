$(window).load(function() {
    'use strict';
    $('.totalScore_text').each(function() {
        var $v = $(this);
        var t = $v.text();
        $v.text(function() {
            if (isFinite(t)) {
                if (Number(t) >= 1) {
                    return 'Aye';
                }
                if (Number(t) === 0) {
                    return 'Nay';

                }
            } else {
                return 'No Vote Recorded';
            }
        });
    });
});