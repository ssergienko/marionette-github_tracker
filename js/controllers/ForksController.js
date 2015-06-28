GithubApp.module("GithubApp.Forks", function (Forks) {

    Forks.Controller = {
        getList: function () {
            new Forks.Model().fetch()
                .done(function (res) {
                    return res;
                })
                .error(function (message) {
                    console.log(message);
                });
        }
    };

});