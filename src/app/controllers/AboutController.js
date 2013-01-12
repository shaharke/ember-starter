define(["ember", "App"], function(Ember, App){

  App.AboutController = Ember.ObjectController.extend({
    foo : function(event) {
      console.log("Controller action!");
    }
  });

  return App.AboutController;

});
