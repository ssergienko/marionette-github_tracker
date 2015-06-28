GithubApp.module("GithubApp.Contributers", function (Contributers) {

    // contributers model
    Contributers.Model = Backbone.Model.extend({
        url: config.marionetteRepo.contributersUrl
    });

});