(function (root) {
  require(["config"], function (config) {
    requirejs.config(config);
    require([ 'ember',
              'App',
              'Router',
              'views/init',
              'controllers/init'],

        function () {

        });
  });
})(this);