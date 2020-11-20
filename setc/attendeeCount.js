$(function() {
    if (window.location.href.includes('/a/organizations/main/submissions/') || (window.location.href.includes('/a/admin/organizations/main/solicitations/'))) {
        FrontendApiManager.onReady("submissionForm", function(api) {
            $.getScript("https://openwater-themes.s3.amazonaws.com/js/waitForElement.js", function() {
                $.fn.extend({
                    setReadOnly: function(state) {
                        state = state || true;
                        this[0].readOnly = state;
                        this[0].tabIndex = (state) ? -1 : 0;
                        return this;
                    },
                    createObserver: function(callback, config) {
                        config = config || {
                            childList: true
                        };
                        if (!!!window.systemObservers || !Array.isArray(window.systemObservers)) window.systemObservers = [];
                        var newObserver = new MutationObserver(callback);
                        newObserver.observe(this[0], config);
                        window.systemObservers.push(newObserver);
                        return this;
                    },
                });

                var counter = $('.other-attendees-table input[type=text]');
                var table = $('.other-attendees-table tbody');

                function updateTotals() {
                    counter.val(table.find('tr').length).change();
                    var numAdult = api.getField("totalAdultRegs");
                    var numColl = api.getField("totalCollRegs");
                    var numHS = api.getField("totalHSRegs");
                    var numSen = api.getField("totalSeniorRegs");
                    var numTJF = api.getField("totalTheatreJobFair");
                    var numUA = api.getField("totalUndergraduateAuditions");
                    var numUI = api.getField("totalUndergraduateInterviews");
                    var numGA = api.getField("totalGraduateAuditions");
                    var numGI = api.getField("totalGraduateInterviews");
                    var numDC = api.getField("totalDesignCompetition");

                    var adultCount = collegeCount = hsCount = senCount = tjfCount = uaCount = uiCount = gaCount = giCount = dcCount = 0;

                    $(".reg-type").each(function() {
                        if (this.innerText == 'Adult') {
                            adultCount++
                        }
                        if (this.innerText == 'College / University Student') {
                            collegeCount++
                        }
                        if (this.innerText == 'Secondary (High) School Student') {
                            hsCount++
                        }
                        if (this.innerText == 'Senior Citizen (65+)') {
                            senCount++
                        }
                        numAdult.setValue(adultCount);
                        numColl.setValue(collegeCount);
                        numHS.setValue(hsCount);
                        numSen.setValue(senCount);
                    });

                    $('.activity-type').each(function() {
                        if (this.innerText.includes('Theatre Job Fair')) {
                            tjfCount++
                        }
                        if (this.innerText.includes('Undergraduate Auditions')) {
                            uaCount++
                        }
                        if (this.innerText.includes('Undergraduate Interviews')) {
                            uiCount++
                        }
                        if (this.innerText.includes('Graduate Auditions')) {
                            gaCount++
                        }
                        if (this.innerText.includes('Graduate Interviews')) {
                            giCount++
                        }
                        if (this.innerText.includes('Design Competition')) {
                            dcCount++
                        }
                        numTJF.setValue(tjfCount);
                        numUA.setValue(uaCount);
                        numUI.setValue(uiCount);
                        numGA.setValue(gaCount);
                        numGI.setValue(giCount);
                        numDC.setValue(dcCount);
                    });
                }
                table.createObserver(updateTotals);
                updateTotals();
            });
        });
    };
});