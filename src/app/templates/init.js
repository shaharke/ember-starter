define(['ember',
        'text!templates/about.html',
        'text!templates/index.html'], function(Ember, aboutTemplate, indexTemplate){

  Ember.TEMPLATES['about'] = Ember.Handlebars.compile(aboutTemplate);
  Ember.TEMPLATES['index'] = Ember.Handlebars.compile(indexTemplate);
});
