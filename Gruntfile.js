module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        coffee: {
            code: {
                expand: true,
                cwd: 'coffee',
                src: [ '**/*.coffee' ],
                dest: 'js',
                ext: '.js'
            },
            tests: {
                expand: true,
                cwd: 'tests/coffee',
                src: [ '**/*.coffee' ],
                dest: 'tests/specs',
                ext: '.js'
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
    grunt.registerTask(
        'compile',
        'Compiles the JavaScript files and tests.',
        [ 'coffee' ]
    );

    // Run jasmine tests
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('runtests', 'jasmine');

    // Run all
    grunt.registerTask(
        'build',
        'Execite all Grunts operations.',
        [ 'compile', 'runtests' ]
    );

};