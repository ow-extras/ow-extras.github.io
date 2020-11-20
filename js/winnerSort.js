$(function() {
    $.getScript("https://openwater-themes.s3.amazonaws.com/js/waitForElement.js", function() {
        $('#content').waitUntilExists(function() {
            var winners = $('#content').html().replace(/04.|03.|02.|01./g, '');
            $('#content').html(winners);
        })
    });
});