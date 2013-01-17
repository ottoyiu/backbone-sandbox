// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "app", "views/AppView", "views/IndexView", "views/TestView", "collections/Collection"],

    function ($, Backbone, App, AppView, IndexView, TestView, Collection) {

        var DesktopRouter = Backbone.Router.extend({

            initialize:function () {
                App.router = this;
                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();
                new AppView();

            },

            // All of your Backbone Routes (add more)
            routes:{
                "test":"test",
                // When there is no hash on the url, the home method is called
                "":"index"

            },
            test:function () {
                new TestView();
            },

            index:function () {

                // Instantiates a new view which will render the header text to the page
                new IndexView();

            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);