define(['App',
        'ember'],

    function (App, Ember) {
      App.AboutView =  Ember.View.extend( {
        templateName : 'about',

        nameBinding : 'App.mock.user.name', // Global bindings

        message : "",

        foo: function() {
          console.log("View action");
          this.set("message", "View!");
        }

      });

      return App.AboutView
    });