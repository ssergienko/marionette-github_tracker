GithubApp.module "GithubApp.Contributers", (Contributers) ->
  Contributers.ContributerView = Backbone.Marionette.ItemView.extend
    template: "#contributorTemplate"

  Contributers.ContributersListView = Backbone.Marionette.CompositeView.extend
    el: "#content"
    template: "#contributorsTemplate"
    childView: Contributers.ContributerView
    childViewConteiner: "#contributers"