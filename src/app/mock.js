define(['models/User', 'App'], function(UserClass, App){

  App.mock = {
    user : UserClass.create({ name: "" })
  };

  return App.mock;

});