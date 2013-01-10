define(["App",
        "ember",
        "text!templates/landingPage.html"],

    function( App, Ember, template) {
      App.reopen({
        LandingPageView : Ember.View.extend( {

          template : Ember.Handlebars.compile(template)
        })

      });

      return App.LandingPageView;
});