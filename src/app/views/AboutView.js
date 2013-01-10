define(['App',
        'ember',
        'text!templates/about.html'
        ],

    function (App, Ember, aboutTemplate) {
      App.AboutView =  Ember.View.extend( {
        templateName : 'about',

        nameBinding : 'App.mock.user.name' // Global bindings

      });

      Ember.TEMPLATES['about'] = Ember.Handlebars.compile(aboutTemplate);

      return App.AboutView
    });