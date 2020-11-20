FrontendApiManager.onReady("submissionForm", function(api) {
    var titleBox = api.getField("title");
    titleBox.onChange(function() {
        $('#grURL').attr('href', 'https://www.goodreads.com/search?q=' + titleBox.getValue());
        $('#grURL').text('Search ' + titleBox.getValue() + ' on Goodreads.');
    });
});