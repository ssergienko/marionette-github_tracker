(function() {
  GithubApp.module("GithubApp.Contributers", function(Contributers) {
    Contributers.ContributerView = Backbone.Marionette.ItemView.extend({
      template: "#contributorTemplate"
    });
    Contributers.ContributersListView = Backbone.Marionette.CollectionView.extend({
      el: "#content",
      childView: Contributers.ContributerView,
      initialize: function() {
        return this.$el.html('');
      }
    });
    return console.log('cw');
  });

}).call(this);
