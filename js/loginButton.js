// Change text used in login buttons from "Login" to "Login as Non-Member"
$(function() {
    $.getScript("https://openwater-themes.s3.amazonaws.com/js/waitForElement.js", function() {
        $('.login_box').waitUntilExists(function() {
            $(".fr").text("Login as Non-Member");
        });
    });
});