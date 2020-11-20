$('head').append($('<' + 'link rel="stylesheet" type="text/css" />').attr('href', 'https://owjosh.github.io/custom/read-only.css'));

$(function() {
    $.getScript("https://openwater-themes.s3.amazonaws.com/js/waitForElement.js", function() {
        $('.read-only select').waitUntilExists(function() {
            $('.read-only select').attr("disabled", true);
            this.tabIndex = -1;
        })
        $(".read-only input[type='text'], .read-only textarea").waitUntilExists(function() {
            this.readOnly = true;
            this.tabIndex = -1;
        })
    });
});