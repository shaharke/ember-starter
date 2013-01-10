define(["ember", "App"], function(Ember, App){
  App.reopen({
    LandingPageController : Ember.Controller.extend({
      name : "Shahar Kedar"
    })
  });
  return App.LandingPageController
});
