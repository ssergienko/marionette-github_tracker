(function() {
  GithubApp.module("GithubApp.Forks", function(Forks) {
    return Forks.ForksModel = Backbone.Model.extend({
      url: config.marionetteRepo.forksUrl
    });
  });

}).call(this);
