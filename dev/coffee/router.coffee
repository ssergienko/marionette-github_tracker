GithubApp.module "GithubApp", (GithubApp) ->

    GithubApp.Router = Marionette.AppRouter.extend
        appRoutes:
            '':             'contributers'
            'contributers': 'contributers'
            'forks':        'forks'

    # initialize router
    new GithubApp.Router
        controller:
            contributers: ->
                GithubApp.Contributers.Controller.showList()
            forks: ->
                GithubApp.Forks.Controller.showList()

    Backbone.history.start() if Backbone.history