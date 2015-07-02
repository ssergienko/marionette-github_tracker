GithubApp.module "GithubApp.Contributers", (Contributers) ->

  Contributers.Controller =

    showList: ->
      window.spinner = GithubApp.spinner.wait()
      contributers = new Contributers.ContributersModel()
      .fetch()
      .done (this.success)
      .error (this.error)

    success: (contributersList) ->

      if contributersList && contributersList.length > 0
        # invoke view here
        if !contributersListView
          contributersListView = new Contributers.ContributersListView collection: new Backbone.Collection contributersList
          contributersListView.render()
      else
        console.log('Couldn`t recive contributers')

      window.spinner.destroy()

    error: (message) ->
      console.log(message)
      window.spinner.destroy()

    test: ->
      return 'test'
