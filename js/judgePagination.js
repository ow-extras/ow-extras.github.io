var $galleryDetails = $('.gallery_details');​
// create button row outside scrolling split view
$galleryDetails.after('<div class="button-row"><div class="button-row-left"></div><div class="button-row-right"></div></div>');​
// move entry info out of and above split view
$('#evaluation>.wbox:first-child').prependTo($galleryDetails);
$('.categoryName').after('<br>');​
// move left side buttons into pop out row
$('.judgingGallery_leftContent .btn-submit').appendTo($('.button-row-left'));​
// move right side buttons into pop out row
// $('.judgingGallery_rightContent .submitButtons').appendTo($('.button-row-right'));
$('.button-row-right').append('<a class="btn cancel-and-back">Cancel & Go Back</a><button class="save-and-back">Save & Back to List</button><button class="save-and-next">Save & Go to Next</button>');​
//
var $breadcrumbs = $('.formBuilderFormBreadCrumb a');
var selectedIndex = $breadcrumbs.filter('.selected').index();
var $tabSets = $('#evaluation .tab-set');
var $nextBtn = $('.button-row .button-row-left .next');
var $prevBtn = $('.button-row .button-row-left .prev');
var $cancel = $('.submitButtons .btn');
var $saveAndBack = $('.submitButtons .backToList');
var $saveAndNext = $('.submitButtons .goToNext');
var labelToClass = function(str) {
    return '.tab-set.' + str.toLowerCase().replace(/\s/g, '-');
};​
$('.cancel-and-back').attr('href', $cancel.attr('href'));
$('.save-and-back').click(function() {
    console.log('save and back');
    $saveAndBack.click();
});
$('.save-and-next').click(function() {
    console.log('save and next');
    $saveAndNext.click();
});​
$prevBtn.removeAttr('style');​
$breadcrumbs.click(function() {
    var selector = labelToClass(this.innerText);
    $tabSets.filter('.show-tab').removeClass('show-tab');
    $tabSets.filter(selector).addClass('show-tab');
});​
$nextBtn.click(function() {
    $breadcrumbs.filter('.selected').parent().next().find('a').click();
});​
$prevBtn.click(function() {
    $breadcrumbs.filter('.selected').parent().prev().find('a').click();
});​
$tabSets.filter(labelToClass($breadcrumbs.filter('.selected').text())).addClass('show-tab');​
// insert org name into statement of understanding
$('.org-name-here').text($('.organization-name .formValue').text());