/**
 * A Backbone Events Channel Factory that allows you to create and reference
 * namespaced event aggregators, or 'channels', on the fly.
 *
 * The factory itself should be accessed statically. You can get a channel
 * instance by calling BackboneEventChannelFactory.getChannel('myChannel');
 *
 */

define(['underscore', 'backbone'],
    function (_, Backbone) {

        // A base object that takes advantage of Backbone's extend functionality
        var Base = function () {
        };
        Base.extend = Backbone.Model.extend;

        var BackboneEventChannelFactory = Base.extend({}, {

            channels:{},

            // Get a reference to a channel registered under given 'namespace'
            // If one does not exist, it will be created
            getChannel: function (namespace) {
                if (typeof namespace !== 'string') {
                    throw new Error("BackboneEventChannelFactory.getChannel(namespace): The channel namespace must be a string.");
                }

                // If channel hasn't been initialized yet
                if (typeof this.channels[namespace] === 'undefined'
                    || this.channels[namespace] === null) {
                    //initialize it
                    this.channels[namespace] = _.extend({}, Backbone.Events);
                }
                return this.channels[namespace];
            },

            // Removes channel from the factory's registery
            // Calling this does not necessarily delete the channel, as other
            // objects may still have a reference to it.

            unregisterChannel: function (namespace) {
                if (typeof namespace !== 'string') {
                    throw new Error("BackboneEventChannelFactory.unregisterChannel(namespace): The channel namespace must be a string.");
                }

                delete this.channels[namespace];
            }
        });

        return BackboneEventChannelFactory;
    }
);



