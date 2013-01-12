define(['ember', 'App', 'app/mock'], function (Ember, App, Mock) {
  App.Router.map(function (match) {
    match("/").to("index");
    match("/about").to("about");
  });

  App.IndexRoute = Ember.Route.extend({
    model: function () {
      return Mock.user;
    }
  });

  App.AboutRoute = Ember.Route.extend({
    setupController: function (controller, model) {
      controller.set('content', Mock.user);
    },

    events : {
      test : function(event) {
        console.log("Router action!");
      }
    }


  })
});
