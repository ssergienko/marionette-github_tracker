GithubApp.module "GithubApp.Forks", (Forks) ->

  # connect to github
  GithubApi = new Github
    username: config.github.username
    password: config.github.password
    auth: "basic"

  Forks.ForkView = Backbone.Marionette.ItemView.extend
    events: "click #star": "starring"
    template: "#forkTemplate",
    initialize: ->
      _that = this
      this.forkUser = this.model.get("owner").login
      this.forkRepoName = this.model.get "name"

      # get marionette repo
      this.forkRepo = GithubApi.getRepo this.forkUser, this.forkRepoName

      this.forkRepo.isStarred this.forkUser, this.forkRepoName,
        (err, res) ->
          if res == true then _that.setStarred()
          else _that.setUnstarred()

    starring: () ->
      if this.model.get("starred") != true then this.star()
      else this.unstar()
    star: ->
      _that = this
      this.forkRepo.star this.forkUser, this.forkRepoName,
        (res) ->
          _that.setStarred()
    unstar: ->
      _that = this
      this.forkRepo.unstar this.forkUser, this.forkRepoName,
        (res) ->
          _that.setUnstarred()
    setStarred: ->
      this.$el.addClass "starred"
      this.model.set "starred", true
    setUnstarred: ->
      this.$el.removeClass "starred"
      this.model.set "starred", false

  Forks.ForksListView = Backbone.Marionette.CompositeView.extend
    el: "#content"
    template: "#forksTemplate"
    childView: Forks.ForkView
    childViewConteiner: "#listConteiner"
   