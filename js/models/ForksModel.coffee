GithubApp.module "GithubApp.Forks", (Forks) ->

    # forks model
    Forks.ForksModel = Backbone.Model.extend
        url: config.marionetteRepo.forksUrl