GithubApp.module("GithubApp", function (GithubApp) {

    GithubApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "": "contributers",
            "contributers": "contributers",
            "forks": "forks"
        }
    });

    // initialize router
    new GithubApp.Router({
        controller: {
            contributers: function(){
                GithubApp.Contributers.Controller.getList();
            },
            forks: function () {
                GithubApp.Forks.Controller.getList();
            }
        }
    });

    if(Backbone.history){
        Backbone.history.start();
    }

});