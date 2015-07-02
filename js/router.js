(function () {
	GithubApp.module("GithubApp", function (GithubApp) {
		GithubApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				'': 'contributers', 'contributers': 'contributers', 'forks': 'forks'
			}
		});
		new GithubApp.Router({
			controller: {
				contributers: function () {
					return GithubApp.Contributers.Controller.showList();
				}, forks: function () {
					return GithubApp.Forks.Controller.showList();
				}
			}
		});
		if (Backbone.history) {
			return Backbone.history.start();
		}
	});

}).call(this);
