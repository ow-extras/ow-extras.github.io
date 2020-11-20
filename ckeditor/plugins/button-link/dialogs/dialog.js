CKEDITOR.dialog.add('button-link-dialog', function(editor) {
    return {
        title: 'Link Button Config',
        minWidth: 350,
        minHeight: 200,
        contents: [{
            id: 'link-button-config',
            elements: [{
                    setup: function(widget) {
                        this.setValue(widget.data.bg_color);
                    },
                    commit: function(widget) {
                        widget.setData('bg_color', this.getValue());
                    },
                    type: 'text',
                    id: 'bg_color',
                    label: 'Background color (HEX, RGB, RGBA) or leave blank for default'
                },
                {
                    setup: function(widget) {
                        this.setValue(widget.data.text_color);
                    },
                    commit: function(widget) {
                        widget.setData('text_color', this.getValue());
                    },
                    type: 'text',
                    id: 'text_color',
                    label: 'Text color (HEX, RGB, RGBA) or leave blank for default'
                },
                {
                    setup: function(widget) {
                        this.setValue(widget.data.link_url);
                    },
                    commit: function(widget) {
                        var value = this.getValue();
                        if (value.indexOf('http') !== 0 && value.indexOf('mailto:') !== 0) value = 'http://' + value;
                        widget.setData('link_url', value);
                    },
                    type: 'text',
                    id: 'link_url',
                    label: 'Link URL with full path, http or https required'
                },
                {
                    setup: function(widget) {
                        this.setValue(widget.data.link_text);
                    },
                    commit: function(widget) {
                        widget.setData('link_text', this.getValue());
                    },
                    type: 'text',
                    id: 'link_text',
                    label: 'Link text to display on page'
                },
                {
                    setup: function(widget) {
                        this.setValue(widget.data.new_tab)
                    },
                    commit: function(widget) {
                        widget.setData('new_tab', this.getValue())
                    },
                    type: 'checkbox',
                    id: 'new_tab',
                    label: 'Open link in a new tab?'
                }
            ]
        }]
    };
});