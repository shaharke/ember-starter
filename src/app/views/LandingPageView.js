define(['App',
        'ember',
        'text!templates/landingPage.html',
        'controllers/LandingPageController'
        ],

    function (App, Ember, landingPageTemplate) {
      App.LandingPageView =  Ember.View.extend( {
        templateName : 'landingPage',

        nameBinding: "controller.name",

        greeting : function() {
          var name = this.get('name');
          if (name) {
            return "Hello " + name;
          }
          return ""
        }.property('name')

      });

      Ember.TEMPLATES['landingPage'] = Ember.Handlebars.compile(landingPageTemplate);

      return App.LandingPageView
    });