(function() {
  GithubApp.module("GithubApp.Contributers", function(Contributers) {
    return Contributers.ContributersModel = Backbone.Model.extend({
      url: config.marionetteRepo.contributersUrl
    });
  });

}).call(this);
