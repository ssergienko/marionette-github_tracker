module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        coffee: {
            code: {
                bare: false,
                expand: true,
                cwd: 'dev/coffee',
                src: [ '**/*.coffee' ],
                dest: 'js',
                ext: '.js'
            },
            tests: {
                bare: false,
                expand: true,
                cwd: 'dev/tests/coffee',
                src: [ '**/*.coffee' ],
                dest: 'dev/tests/specs',
                ext: '.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dev/sass',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        jasmine : {
            src : 'js/**/*.js',
            options : {
                specs : 'dev/tests/**/*_test.js',
                helpers: [
                    'js/widgets/menu/usermenu.js',
                    'js/widgets/spinner/spinner.js',
                ],
                vendor: [
                    'js/libs/jquery-2.1.4.min.js',
                    'js/libs/underscore-min.js',
                    'js/libs/backbone-min.js',
                    'js/libs/backbone.marionette.min.js',
                    'js/libs/github.js'
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

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('styles', 'sass');

    // Run jasmine tests
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('runtests', 'jasmine');

    // Run all
    grunt.registerTask(
        'build',
        'Execite all Grunts operations.',
        [ 'compile', 'styles', 'runtests' ]
    );

};