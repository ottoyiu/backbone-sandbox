define(["BackboneEventChannelFactory"], function (BackboneEventChannelFactory) {
    // Namespace
    var App = {};
    App.eventChannel = BackboneEventChannelFactory.getChannel('appChannel');
    return App;
});