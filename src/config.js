define({
  app_name: "BigPandaWebPOC",
  shim: {
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    }
  },
  paths: {
    'App': 'app/app',
    'Router' : 'app/router',
    'models': 'app/models',
    'views': 'app/views',
    'controllers': 'app/controllers',
    'templates': 'app/templates',

    /*libs*/
    'jquery': 'libs/jquery/1.8.3/jquery',
    'handlebars': 'libs/handlebars/1.0.rc.1/handlebars',
    'ember': 'libs/ember/1.0.0-pre2.1/ember',
    'bootstrap': 'libs/bootstrap.min',

    /*plugins*/
    'text' : 'libs/require/2.1.2/text',
    'domReady' : 'libs/require/2.1.2/domReady'

  }
});

