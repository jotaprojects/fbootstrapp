
// The wrapper function
module.exports = function(grunt) {

    // Project and task configuration
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "bootstrap.css": "lib/bootstrap.less"
                }
            },
            production: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "bootstrap.min.css": "lib/bootstrap.less"
                }
            }
        },

        watch: {
            less: {
                files: 'lib/*.less',
                tasks: 'less'
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Define tasks
    grunt.registerTask('default', ['watch']);

};
