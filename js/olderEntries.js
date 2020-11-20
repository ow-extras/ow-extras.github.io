$(document).ready(function() {
    $('a[href="/a/organizations/main/submissions/expired"]').parent().hide();
    $('a[href="/a/organizations/main/submissions/complete"]').text("Complete");
    $('a[href="/a/organizations/main/submissions/complete"]').attr("href", "/a/organizations/main/submissions/complete?showFullHistory=True");
    $('a[href="/a/organizations/main/submissions/all"]').attr("href", "/a/organizations/main/submissions/all?showFullHistory=True");
});