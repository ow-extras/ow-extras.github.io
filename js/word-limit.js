FrontendApiManager.onReady("submissionForm", function(api) {
    'use strict';
    var lockState = false;
    var $textAreas = $('.limit-words textarea');
    var total;
    var maxWords;
    var rawfieldTitles = $('.limit-words label').text()

    var handlePaste = function(e) {
        checkMaxWords();
        console.log(maxWords);
        var clipboardData, pastedData, pasteLength;
        e.stopPropagation();
        e.preventDefault();
        clipboardData = e.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData('Text');
        pasteLength = pastedData.trim().split(' ').length;
        if ((pasteLength + total) <= maxWords) {
            e.target.value += pastedData;
        } else {
            alert('This exceeds maximum word count.');
        }
    };

    var enableTextAreas = function() {
        $textAreas.each(function() {
            this.removeAttribute('maxlength');
        });
        lockState = false;
    };

    var disableTextAreas = function() {
        $textAreas.each(function() {
            this.setAttribute('maxlength', this.getAttribute('data-count'));
        });
        lockState = true;
    };

    var trimTextArea = function() {
        let activeId = document.activeElement.id;
        let stringId = "#" + activeId + "";
        let newStr = $(stringId).val()
        let newNew = newStr.replace(/\w+[,.\ !?]?$/, '').trim();
        $(stringId).val(newNew);
    }

    var checkWordLimit = function() {
        checkMaxWords();
        console.log(maxWords);
        total = 0;
        $textAreas.each(function() {
            var textValue = this.value.trim();
            var len = (!!textValue) ? textValue.split(' ').length : 0;
            this.setAttribute('data-count', this.value.length);
            total += len;
        });
        console.log(total)
        if (total >= (maxWords + 1)) {
            trimTextArea();
            var errMsg = document.createElement("div");
            errMsg.innerHTML = "You've exceeded the shared max word count of " + maxWords + " words. <br/><br/>Fields counted towards the max total: <br/><strong>" + rawfieldTitles + "</strong>";
            swal({
                icon: 'error',
                title: 'Error',
                content: errMsg,
            })
            disableTextAreas();
        } else if (lockState) enableTextAreas();
    };

    var checkMaxWords = function() {
        if (typeof window.maxWords !== "undefined") {
            maxWords = window.maxWords;
        } else {
            maxWords = 500;
        }
    }

    $textAreas.each(function() {
        this.addEventListener('paste', handlePaste);
        this.addEventListener('keyup', checkWordLimit);
    });
});
