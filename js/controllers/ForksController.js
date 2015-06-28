GithubApp.module("GithubApp.Forks", function (Forks) {

    Forks.Controller = {
        getList: function () {

            var spinner = GithubApp.spinner.wait();

            new Forks.Model().fetch()
                .done(function (forksList) {
                    if (forksList && forksList.length > 0) {
                        // invoke view here
                        if (!forksListView) {
                            var forksListView = new Forks.ForksListView({
                                collection: new Backbone.Collection(forksList)
                            });
                        }
                        forksListView.render();
                    } else {
                        console.log('Couldn`t recive forks');
                    }
                    spinner.destroy();
                })
                .error(function (message) {
                    console.log(message);
                    spinner.destroy();
                });
        }
    };

});