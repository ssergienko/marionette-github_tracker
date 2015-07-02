(function () {
	GithubApp.module("GithubApp.Forks", function (Forks) {
		var GithubApi;
		GithubApi = new Github;
		({
			username: config.github.username, password: config.github.password, auth: "basic"
		});
		Forks.ForkView = Backbone.Marionette.ItemView.extend;
		({
			events: {
				"click #star": "starring"
			}, template: "#forkTemplate", initialize: function () {
				var _that;
				_that = this;
				this.forkUser = this.model.get("owner").login;
				this.forkRepoName = this.model.get("name");
				this.forkRepo = GithubApi.getRepo(this.forkUser, this.forkRepoName);
				return this.forkRepo.isStarred(this.forkUser, this.forkRepoName, function (err, res) {
					if (res === true) {
						return _that.setStarred();
					} else {
						return _that.setUnstarred();
					}
				});
			}, starring: function () {
				if (this.model.get("starred") !== true) {
					return this.star();
				} else {
					return this.unstar();
				}
			}, star: function () {
				var _that;
				_that = this;
				window.spinner = GithubApp.spinner.wait();
				return this.forkRepo.star(this.forkUser, this.forkRepoName, function (res) {
					return _that.setStarred();
				});
			}, unstar: function () {
				var _that;
				_that = this;
				window.spinner = GithubApp.spinner.wait();
				return this.forkRepo.unstar(this.forkUser, this.forkRepoName, function (res) {
					return _that.setUnstarred();
				});
			}, setStarred: function () {
				this.$el.addClass("starred");
				this.model.set("starred", true);
				return window.spinner.destroy();
			}, setUnstarred: function () {
				this.$el.removeClass("starred");
				this.model.set("starred", false);
				return window.spinner.destroy();
			}
		});
		Forks.ForksListView = Backbone.Marionette.CompositeView.extend;
		return {
			el: "#content",
			template: "#forksTemplate",
			childView: Forks.ForkView,
			childViewConteiner: "#listConteiner",
			initialize: function () {
				return this.spinner = GithubApp.spinner.wait();
			},
			onRender: function () {
				return this.spinner.destroy();
			}
		};
	});

}).call(this);
