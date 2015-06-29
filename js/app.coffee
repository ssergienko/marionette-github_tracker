window.GithubApp = new Mn.Application()

# modules
GithubApp.module "menu", -> $.extend this, window.widgets.userMenu
GithubApp.module "spinner", -> $.extend this, window.widgets.spinner

# app started
GithubApp.on "start", ->

  # initialize menu
  GithubApp.menu.init
      el: "#menu"
      options: [
          { text: 'Contributors', link: '#contributers', active: true },
          { text: 'Forks', link: '#forks' }
      ]

GithubApp.start()