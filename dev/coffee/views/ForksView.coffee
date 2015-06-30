GithubApp.module "GithubApp.Forks", (Forks) ->

  Forks.ForkView = Backbone.Marionette.ItemView.extend
    template: "#forksTemplate"

  Forks.ForksListView = Backbone.Marionette.CollectionView.extend
    el: "#content"
    childView: Forks.ForkView
    initialize: ->
      this.$el.html('')
   