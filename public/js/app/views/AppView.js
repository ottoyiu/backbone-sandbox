// View.js
// -------
define(["jquery", "backbone", "app", "views/NavView"],

    function ($, Backbone, App, NavView) {

        var AppView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#page-container",

            // View constructor
            initialize: function() {
                new NavView();

                // show page after render
                this.$el.show();
            },


        });

        // Returns the View class
        return AppView;

    }

);