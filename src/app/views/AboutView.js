define(['App',
        'ember',
        'text!templates/index.html',
        'controllers/IndexController'
        ],

    function (App, Ember, indexTemplate) {
      App.IndexView =  Ember.View.extend( {
        templateName : 'index',

        nameBinding: "controller.name",

        greeting : function() {
          var name = this.get('name');
          if (name) {
            return "Hello " + name;
          }
          return ""
        }.property('name')

      });

      Ember.TEMPLATES['index'] = Ember.Handlebars.compile(indexTemplate);

      return App.IndexView
    });