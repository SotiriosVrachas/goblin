define([
        'backbone',
        'common',
        'marionette',
        'views/ThemeOptionView'
    ],
    function (Backbone, Common) {

        'use strict';

        var GOB = Common.app_namespace || {};

        GOB.Views.ThemesDropdownView = Backbone.Marionette.CollectionView.extend({

            itemView: GOB.Views.ThemeOptionView,

            tagName: 'select',

            className: 'theme',

            initialize: function () {
                // Bind the view to the Model
                this.listenTo(this.model, 'change', this.render, this);
            },

            onRender: function () {
                var theme = this.model.get("theme");

                if (theme !== "") {
                    this.$el.val(theme);
                }

            }

        });
    }
);