define(["ember"],
    function(Ember){

      return Ember.Router.extend({
        root: Ember.Route.extend({
          index: Ember.Route.extend({
            route: '/',

            connectOutlets: function(router, context) {
              debugger;
              var controller = router.get("applicationController");
              controller.connectOutlet("landingPage", context);

            },

            foo : function(e) {
              debugger;
            }

          })

        })
      });
    });