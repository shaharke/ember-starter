define([
  "App",
  "ember",
  "text!templates/applicationTemplate.html"
], function (App, Ember, applicationTemplate) {

  var ApplicationView = Ember.View.extend({
    template: Ember.Handlebars.compile(applicationTemplate)
  });

  return ApplicationView;
});
