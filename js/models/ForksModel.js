GithubApp.module("GithubApp.Forks", function (Forks) {

    // forks model
    Forks.Model = Backbone.Model.extend({
        url: config.marionetteRepo.forksUrl
    });

});