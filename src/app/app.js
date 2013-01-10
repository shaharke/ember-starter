define([
  "views/ApplicationView",
  "controllers/ApplicationController",
  "Router"
], function (ApplicationView, ApplicationController, Router) {

  var App = Ember.Mixin.create({
    ApplicationView: ApplicationView,
    ApplicationController: ApplicationController,
    Router: Router
  });

  return App;
});