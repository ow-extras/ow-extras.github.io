$(function() {
    $.getScript("https://openwater-themes.s3.amazonaws.com/js/waitForElement.js", function() {
        $('.gallery_details').waitUntilExists(function() {
            // create button row
            var $galleryDetails = $('.gallery_details');
            $galleryDetails.after('<div class="button-row"><div class="button-row-left"></div><div class="button-row-right"></div></div>');
            $('#evaluation>.wbox:first-child').prependTo($galleryDetails);
            $('.categoryName').after('<br>');
            $('#content>div.gallery_details>div.judgingGallery_info.wbox').append('<br><br><br><br>');
            $('.judgingGallery_leftContent .btn-submit').appendTo($('.button-row-left'));
            $('.button-row-right').append(`
    <a class="btn cancel-and-back">Cancel & Go Back</a>
    <button class="save-and-back">Save & Back to List</button>
    <button class="save-and-next">Save & Go to Next</button>
    <button class="save-draft">Save Draft</button>
`);

            $('.fields:first').before('<h3>Submission Form</h3><hr>');

            var $breadcrumbs = $('.formBuilderFormBreadCrumb a');
            var selectedIndex = $breadcrumbs.filter('.selected').index();
            var $tabSets = $('#evaluation .tab-set');
            var $nextBtn = $('.button-row .button-row-left .next');
            var $prevBtn = $('.button-row .button-row-left .prev');
            var $cancel = $('.submitButtons .btn');
            var $saveAndBack = $('.submitButtons .backToList');
            var $saveAndNext = $('.submitButtons .goToNext');
            var $saveDraft = $('.submitButtons .submit.save');
            var leftPanel = document.querySelector('.judgingGallery_leftContent');
            var rightPanel = document.querySelector('.judgingGallery_rightContent');
            var pageNum = 1;

            var labelToClass = function(str) {
                var myClass = '.tab-set.' + str.toLowerCase().replace(/\s/g, '-').replace(/[()]/g, '');
                return myClass;
            };
            var searchForRequired = function() {
                $tabSets.removeClass('show-tab').each(function() {
                    var $this = $(this);
                    var page = '';
                    if ($this.find('.input-validation-error').length > 0) {
                        $this.addClass('show-tab');
                        page = $this.attr('class').split(' ')[2];
                        $tabSets.filter('.tab-set-header.' + page).addClass('show-tab');
                    }
                });
            };
            $('.cancel-and-back').attr('href', $cancel.attr('href'));
            $('.save-and-back').click(function() {
                $saveAndBack.click();
                setTimeout(function() {
                    searchForRequired();
                }, 250);
            });
            $('.save-and-next').click(function() {
                $saveAndNext.click();
                setTimeout(function() {
                    searchForRequired();
                }, 250);
            });
            $('.save-draft').click(function() {
                $saveDraft.click();
                setTimeout(function() {
                    searchForRequired();
                }, 250);
                setTimeout(function() {
                    $breadcrumbs.filter('.selected').click();
                }, 250);
            });

            if ($saveAndNext.length === 0) $('#save-and-next').hide();

            $prevBtn.removeAttr('style').prop('disabled', true);

            var checkPage = function() {
                crumbLength = $('.breadCrumbLink').length;
                if (pageNum == crumbLength) {
                    $('.next').prop('disabled', true);
                }
                if (pageNum < crumbLength) {
                    $('.next').prop('disabled', false);
                }
                if (pageNum == 1) {
                    $prevBtn.prop('disabled', true);
                }
                if (pageNum > 1) {
                    $prevBtn.prop('disabled', false);
                }
            };

            $breadcrumbs.click(function() {
                var selector = labelToClass(this.innerText);
                $tabSets.filter('.show-tab').removeClass('show-tab');
                $tabSets.filter(selector).addClass('show-tab');
                pageNum = Number($(this).attr('data-pageindex')) + 1;
                checkPage();
            });

            $nextBtn.click(function() {
                leftPanel.scrollTop = 0;
                rightPanel.scrollTop = 0;
                pageNum = Number($(this).attr('data-pageindex')) + 1;
                checkPage();
                $breadcrumbs.filter('.selected').parent().next().find('a').click()
            });

            $prevBtn.click(function() {
                leftPanel.scrollTop = 0;
                rightPanel.scrollTop = 0;
                pageNum = Number($(this).attr('data-pageindex')) + 1;
                checkPage();
                $breadcrumbs.filter('.selected').parent().prev().find('a').click();
            });

            $tabSets.filter(labelToClass($breadcrumbs.filter('.selected').text())).addClass('show-tab');
        })
    });
});