define(['App',
        'ember'],

    function (App, Ember) {
      App.IndexView =  Ember.View.extend( {
        templateName : 'index',

        nameBinding: "controller.name", //Local bindings

        greeting : function() {
          var name = this.get('name');
          if (name) {
            return "Hello " + name;
          }
          return ""
        }.property('name')

      });

      return App.IndexView
    });