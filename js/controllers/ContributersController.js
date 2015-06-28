GithubApp.module("GithubApp.Contributers", function (Contributers) {

    Contributers.Controller = {
        getList: function () {

            var spinner = GithubApp.spinner.wait();

            var contributers = new Contributers.Model().fetch()
                .done(function (contributersList) {
                    if (contributersList && contributersList.length > 0) {
                        // invoke view here
                        if (!contributersListView) {
                            var contributersListView = new Contributers.ContributersListView({
                                collection: new Backbone.Collection(contributersList)
                            });
                        }
                        contributersListView.render();
                    } else {
                        console.log('Couldn`t recive contributers');
                    }
                    spinner.destroy();
                }).error(function (message) {
                    console.log(message);
                    spinner.destroy();
                });
        }
    };

});