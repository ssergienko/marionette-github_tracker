GithubApp.module "GithubApp.Contributers", (Contributers) ->

    Contributers.ContributerView = Backbone.Marionette.ItemView.extend
        template: "#contributorTemplate"

    Contributers.ContributersListView = Backbone.Marionette.CollectionView.extend
        el: "#content"
        childView: Contributers.ContributerView
        initialize: ->
          this.$el.html('')

    console.log('cw');