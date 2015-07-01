(function() {
  GithubApp.module("GithubApp.Forks", function(Forks) {
    Forks.ForkView = Backbone.Marionette.ItemView.extend({
      template: "#forkTemplate"
    });
    return Forks.ForksListView = Backbone.Marionette.CompositeView.extend({
      el: "#content",
      template: "#forksTemplate",
      childView: Forks.ForkView,
      childViewConteiner: "#listConteiner"
    });
  });

}).call(this);
