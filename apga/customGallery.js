function showAllSessions() {
    $('h3 > a').closest('div.results_list > div').show()
    $("#containerContent").css("padding", "2em");
}

function hideAllSessions() {
    $('h3 > a').closest('div.results_list > div').hide();
    $("#containerContent").show();
};

$(function() {
    if (window.location.toString().includes("roundId=2&")) {
        $("#tabs, #containerContent, div.applicationGallery_info > p:nth-child(4), div.applicationGallery_info > hr").hide();
        $("#gallery_back").show();
    }
});

$("#containerContent div").hide(); // Initially hide all content
$("#containerContent div:first").fadeIn(); // Show first tab content
$('#tabs a').click(function(e) {
    e.preventDefault();
    showAllSessions();
    $("#containerContent div").hide(); //Hide all content
    $("#tabs li").attr("id", ""); //Reset id's
    $(this).parent().attr("id", "current"); // Activate this
    $('#' + $(this).attr('title')).fadeIn(); // Show content for current tab
    showAllSessions();
    if ($(this).attr("title") == ("tab2")) {
        hideAllSessions();
        $("p:nth-child(4) strong:contains('October 19'), strong:contains('October 20'), strong:contains('October 21'), strong:contains('October 22'), strong:contains('October 23')").closest('div.results_list > div').show();
    }
    if ($(this).attr("title") == ("tab3")) {
        hideAllSessions();
        $("p:nth-child(4) strong:contains('October 27'), strong:contains('October 28'), strong:contains('October 29'), strong:contains('October 30')").closest('div.results_list > div').show();
    }
    if ($(this).attr("title") == ("tab4")) {
        hideAllSessions();
        $("p:nth-child(4) strong:contains('November 3'), strong:contains('November 4'), strong:contains('November 5'), strong:contains('November 6')").closest('div.results_list > div').show();
    }
    if ($(this).attr("title") == ("tab5")) {
        hideAllSessions();
        $("p:nth-child(4) strong:contains('Operations & Engineering'), strong:contains('Transmission Pipelines'), strong:contains('Safety & Compliance'), strong:contains('Bonus Session')").closest('div.results_list > div').show();
    }
    if ($(this).attr("title") == ("tab6")) {
        hideAllSessions();
        $("#containerContent").css("padding", ".25em");
        $(".favorite").closest('div.results_list > div').show();
    }
});
$('div[id^="tab"] a').click(function(e) {
    e.preventDefault();
    hideAllSessions();
    if ($(this).attr("id") == ("oct19")) {
        $("p:nth-child(4) strong:contains('October 19')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("oct20")) {
        $("p:nth-child(4) strong:contains('October 20')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("oct21")) {
        $("p:nth-child(4) strong:contains('October 21')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("oct22")) {
        $("p:nth-child(4) strong:contains('October 22')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("oct23")) {
        $("p:nth-child(4) strong:contains('October 23')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("oct27")) {
        $("p:nth-child(4) strong:contains('October 27')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("oct28")) {
        $("p:nth-child(4) strong:contains('October 28')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("oct29")) {
        $("p:nth-child(4) strong:contains('October 29')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("oct30")) {
        $("p:nth-child(4) strong:contains('October 30')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("nov3")) {
        $("p:nth-child(4) strong:contains('November 3')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("nov4")) {
        $("p:nth-child(4) strong:contains('November 4')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("nov5")) {
        $("p:nth-child(4) strong:contains('November 5')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("nov6")) {
        $("p:nth-child(4) strong:contains('November 6')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("ops")) {
        $("p:nth-child(4) strong:contains('Operations & Engineering')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("trans")) {
        $("p:nth-child(4) strong:contains('Transmission Pipelines')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("safe")) {
        $("p:nth-child(4) strong:contains('Safety & Compliance')").closest('div.results_list > div').show();
    }
    if ($(this).attr("id") == ("bonus")) {
        $("p:nth-child(4) strong:contains('Bonus Session')").closest('div.results_list > div').show();
    }
});