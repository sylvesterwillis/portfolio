module.exports = function(grunt) {

    // Load the plugins.
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-nodemon');

    // Project configuration.
    grunt.initConfig({
        clean: ['./static/css/dist'],
        less: {
            development: {
                options: {
                    paths: ["./static/css"]
                },
                files: {
                    "./static/css/dist/index.css": "./static/css/*.less"
                }
            },
            production: {
                options: {
                    paths: ["./static/css"]
                },
                files: {
                    "./static/css/dist/index.css": "./static/css/*.less"
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        watch: {
            scripts: {
                files: ['./static/css/*.less'],
                tasks: ['less:development', 'nodemon'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('default', ['clean', 'less:development']);
};
