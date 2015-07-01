GithubApp.module "GithubApp.Forks", (Forks) ->

  Forks.ForkView = Backbone.Marionette.ItemView.extend
    template: "#forkTemplate"

  Forks.ForksListView = Backbone.Marionette.CompositeView.extend
    el: "#content"
    template: "#forksTemplate"
    childView: Forks.ForkView
    childViewConteiner: "#listConteiner"
   