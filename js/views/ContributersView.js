(function() {
  GithubApp.module("GithubApp.Contributers", function(Contributers) {
    Contributers.ContributerView = Backbone.Marionette.ItemView.extend({
      template: "#contributorTemplate"
    });
    return Contributers.ContributersListView = Backbone.Marionette.CompositeView.extend({
      el: "#content",
      template: "#contributorsTemplate",
      childView: Contributers.ContributerView,
      childViewConteiner: "#contributers"
    });
  });

}).call(this);
