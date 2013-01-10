define(['App',
        'ember',
        'text!templates/about.html'
        ],

    function (App, Ember, aboutTemplate) {
      App.AboutView =  Ember.View.extend( {
        templateName : 'about',

        name : 'Shahar' //TODO: bind to index controller

      });

      Ember.TEMPLATES['about'] = Ember.Handlebars.compile(aboutTemplate);

      return App.AboutView
    });