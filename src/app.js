var App = Ember.Application.create({});
window.App = App;


UserClass = Ember.Object.extend({
  name: null
});

App.mock = {
  user: UserClass.create({ name: "" })
};

App.AboutView = Ember.View.extend({
  templateName: 'about',

  nameBinding: 'App.mock.user.name', // Global bindings

  message: "",

  foo: function (event) {
    debugger;
    console.log("View action");
    this.set("message", "View!");
  }
});

App.IndexView = Ember.View.extend({
  templateName: 'index',

  nameBinding: "controller.name",

  greeting: function () {
    var name = this.get('name');
    if (name) {
      return "Hello " + name;
    }
    return ""
  }.property('name'),

  foo : function(event) {
    debugger;
  }

});

App.IndexController = Ember.ObjectController.extend({
  foo :function(event) {
    debugger;
  }
});

App.Router.map(function (match) {
  match("/").to("index");
  match("/about").to("about");
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return App.mock.user;
  }
});

App.AboutRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set('content', App.mock.user);
  }
});
