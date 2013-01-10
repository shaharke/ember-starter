define(['ember', 'App', 'app/mock'], function(Ember, App, Mock) {
   App.Router.map(function(match) {
     match("/about").to("about");
   });

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return Mock.user;
    }
  });

  App.AboutRoute = Ember.Route.extend({
    setupControllers: function(controller, model) {
      controller.set('content', Mock.user);
    }
  })
});
