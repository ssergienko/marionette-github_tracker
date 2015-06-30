(function() {
  GithubApp.module("GithubApp.Contributers", function(Contributers) {
    Contributers.ContributerView = Backbone.Marionette.ItemView.extend({
      template: "#contributorTemplate"
    });
    return Contributers.ContributersListView = Backbone.Marionette.CollectionView.extend({
      el: "#content",
      childView: Contributers.ContributerView,
      initialize: function() {
        return this.$el.html('');
      }
    });
  });

}).call(this);
