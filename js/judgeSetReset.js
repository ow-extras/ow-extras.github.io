// Change title and header text on judge login screen from "Reset" to "Set / Reset"
$(function() {
    if (window.location.href.includes('/a/account/resetpassword')) {
        $("#content").html(function() {
            currentTitle = document.title.split('-', 2);
            document.title = currentTitle[0] + ' - Set / Reset Password';
            return $(this).html().replace("Reset Password", "Set / Reset Password");
        });
    }
});