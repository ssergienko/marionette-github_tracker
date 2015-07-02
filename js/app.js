(function() {
  window.GithubApp = new Mn.Application();

  GithubApp.module("menu", function() {
    return $.extend(this, window.widgets.userMenu);
  });

  GithubApp.module("spinner", function() {
    return $.extend(this, window.widgets.spinner);
  });

  GithubApp.on("start", function() {
    return GithubApp.menu.init({
      el: "#menu",
      options: [
        {
          text: 'Contributors',
          link: '#contributers',
          active: true
        }, {
          text: 'Forks',
          link: '#forks'
        }
      ]
    });
  });

  GithubApp.start();

}).call(this);
