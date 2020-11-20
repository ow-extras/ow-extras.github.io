CKEDITOR.plugins.add('button-link', {
    requires: 'widget',
    icons: 'button-link',
    commandName: 'button-link-init',
    label: 'Button Link',
    init: function(editor) {
        editor.addContentsCss(this.path + 'styles/backend.css');
        editor.widgets.add('button-link-init', {
            template: '<a class="btn-link"></a>',
            upcast: function(element) {
                return element.name == 'a' && element.hasClass('btn-link');
            },
            dialog: 'button-link-dialog',
            init: function() {
                // initialize widget data object
                this.setData('bg_color', this.element.getStyle('background-color'));
                this.setData('text_color', this.element.getStyle('color'));
                this.setData('link_url', this.element.getAttribute('href'));
                this.setData('link_text', this.element.getText());
            },
            data: function() {
                // update widget with new data from dialog
                this.element.setStyle('background-color', this.data.bg_color);
                this.element.setStyle('color', this.data.text_color);
                this.element.setAttribute('data-cke-saved-href', this.data.link_url);
                this.element.setText(this.data.link_text);

                if (this.data.new_tab)
                    this.element.setAttribute('target', '_blank');
                else
                    this.element.removeAttribute('target');
            }
        });

        // add the dialog file to the widget
        CKEDITOR.dialog.add('button-link-dialog', this.path + 'dialogs/dialog.js');
    }
});