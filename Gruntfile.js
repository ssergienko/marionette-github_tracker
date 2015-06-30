module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": "; " },
            "build": {
                "src": [
                    'js/libs/jquery-2.1.4.min.js',
                    "js/libs/underscore-min.js",
                    "js/libs/backbone-min.js",
                    "js/libs/backbone.marionette.min.js",
                    // WIDGETS
                    "js/widgets/menu/usermenu.js",
                    "js/widgets/spinner/spinner.js",
                    // APPLICATION
                    "js/config.js",
                    "js/app.js",
                    "js/models/ContributersModel.js",
                    "js/views/ContributersView.js",
                    "js/controllers/ContributersController.js",
                    "js/models/ForksModel.js",
                    "js/views/ForksView.js",
                    "js/controllers/ForksController.js",
                    "js/router.js"
                ],
                "dest": "js/compiled.js"
            }
        },
        coffee: {
            compile: {
                options: {
                    basePath: 'js',
                    preserve_dirs: true
                }
            }
        },
        jasmine : {
            src : 'js/**/*.js',
            options : {
                specs : 'tests/**/*_test.js',
                helpers: [
                    'js/widgets/menu/usermenu.js',
                    'js/widgets/spinner/spinner.js',
                ],
                vendor: [
                    'js/libs/jquery-2.1.4.min.js',
                    'js/libs/underscore-min.js',
                    'js/libs/backbone-min.js',
                    'js/libs/backbone.marionette.min.js'
                ],
                outfile: 'unittests.html'
            }
        }
    });

    // Compile coffee
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.registerTask('default', ['coffee']);

    // Concat files
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);

    // Jasmine tests
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', 'jasmine');

};