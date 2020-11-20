// questionable workaround for broken admin judge view, restores save buttons
FrontendApiManager.onReady("evaluationForm", function(api) {
    $(function() {
        $.getScript("https://openwater-themes.s3.amazonaws.com/js/waitForElement.js", function() {
            path = location.pathname;
            parts = path.split("y/");
            galleryUrl = parts[0] + "y";
            submitButtons = $('<div class="submitButtons" style="padding: 2px"> <input type="submit" class="submit save" value="Save Draft"> <br> <a class="btn cancelBack" href="moo">Cancel and Go Back</a> <input type="submit" class="submit finalize backToList" value="Save and Back to List"> <input type="submit" class="submit finalize goToNext" value="Save and Go to Next"></div>');
            $(".warningPanel").waitUntilExists(function() {
                $(".warningPanel").hide();
                $(".finalize:first").hide();
                $(".submitButtons").append(submitButtons);
                $(".cancelBack").attr("href", galleryUrl);
                scoredFilter = galleryUrl + "?applicationCategoryId=&searchParams={%22filterByJudgeScorecardStatus%22:[%220%22]}";
                $("input.submit.finalize.goToNext").waitUntilExists(function() {
                    $.get(scoredFilter, function(data) {
                        $(data).find("div:contains('totalScore_text')").each(function() {
                            var checkers = $(this).text();
                            if (checkers.includes('Items 0 -0 of 0') || checkers.includes('Items 1 -1 of 1')) {
                                $("input.submit.finalize.goToNext").hide();
                            }
                        })
                    })
                })
            });
        });
    });
});