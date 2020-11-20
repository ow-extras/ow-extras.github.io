$("#content > div.content-left > div.menu > ul > li:nth-child(4)").hide();

$("#content > div.content-left > div.menu > ul > li:nth-child(3) > a > span").mouseover(function() {
    $("#content > div.content-left > div.menu > ul > li:nth-child(4)").fadeIn();
});

$("#content > div.content-left > div.menu > ul > li:nth-child(4)").mouseleave(function() {
    $("#content > div.content-left > div.menu > ul > li:nth-child(4)").fadeOut();
});