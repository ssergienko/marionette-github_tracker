GithubApp.module("GithubApp.GithubAPI", function (GithubAPI) {

    GithubAPI.Controller = {
        initialize: function () {
            // initialize github
            this.api = new Github({
                apiUrl: config.apiurl,
                username: config.username,
                password: config.password,
                auth: "basic"
            });
        },
        getUser: function (user) {
            this.api.getUser();
            user.show("ssergienko", function(err, user) {
                return user;
            });
        }
    }

});