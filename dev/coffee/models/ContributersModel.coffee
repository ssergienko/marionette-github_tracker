GithubApp.module "GithubApp.Contributers", (Contributers) ->

# contributers model
  Contributers.ContributersModel = Backbone.Model.extend
    url: config.marionetteRepo.contributersUrl
    test: ->
      return 'test'