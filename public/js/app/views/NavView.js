// View.js
// -------
define(["jquery", "backbone", "app", "models/Model", "BackboneEventChannelFactory", "text!templates/nav.html"],

    function ($, Backbone, App, Model, BackboneEventChannelFactory, template) {

        var NavView = Backbone.View.extend({

            // The DOM Element associated with this view
            el:"ul.nav",

            // View constructor
            initialize: function() {
                // Calls the view's render method
                this.render();
                App.eventChannel.on('navToggle', $.proxy(this.navToggle, this));
                this.navToggle();
            },

            // View Event Handlers
            events:{
                "click a":"navigate"
            },

            // Renders the view's template to the UI
            render: function () {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            },

            navigate: function (event) {
                var $link = $(event.currentTarget);
                App.router.navigate($link.data('navigate'), true);
                event.preventDefault();
                console.log("Navigated to route: " + (Backbone.history.fragment || "index"));
            },

            navToggle: function() {
                this.$el.children().removeClass("active");
                this.$el.find("a[data-navigate='"+Backbone.history.fragment+"']").parent().addClass("active");
            }

        });

        // Returns the View class
        return NavView;

    }

);