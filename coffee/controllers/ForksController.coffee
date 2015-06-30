GithubApp.module "GithubApp.Forks", (Forks) ->

  Forks.Controller =

    showList: ->
      window.spinner = GithubApp.spinner.wait()
      contributers = new Forks.ForksModel()
      .fetch()
      .done (this.success)
      .error (this.error)

    success: (forksList) ->

      if forksList && forksList.length > 0
        # invoke view here
        if !forksListView
          forksListView = new Forks.ForksListView collection: new Backbone.Collection forksList
          forksListView.render()
      else
        console.log('Couldn`t recive forks')

      window.spinner.destroy()

    error: (message) ->
      console.log(message)
      window.spinner.destroy()