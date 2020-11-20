// scroll to top of application when using side by side judging Prev and Next buttons.
$(".btn-submit").click(function() {
    var applicationTop = document.querySelector("#content > div > div.judgingGallery_leftContent > div")
    applicationTop.scrollIntoView();
});