CKEDITOR.dialog.add('z-preview-dialog', function(editor) {
    return {
        title: 'Z Preview Config',
        minWidth: 350,
        minHeight: 200,
        contents: [{
            id: 'z-preview-config',
            elements: [{
                setup: function(widget) {
                    this.setValue(widget.data.media_url);
                },
                commit: function(widget) {
                    widget.setData('media_url', this.getValue());
                },
                type: 'text',
                id: 'media_url',
                label: '.MediaUrl variable to preview'
            }]
        }]
    };
});