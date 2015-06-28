GithubApp.module("GithubApp.Contributers", function (Contributers) {

    Contributers.Controller = {
        getList: function () {

            var spinner = GithubApp.spinner.wait();

            new Contributers.Model().fetch()
                .done(function (contributersList) {
                    if (contributersList && contributersList.length > 0) {
                        new Contributers.ContributersListView({
                            collection: contributersList
                        });
                    } else {
                        console.log('Couldn`t recive contributers');
                    }
                    spinner.destroy();
                });
        }
    };

});