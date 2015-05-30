module.exports = function(grunt) {

    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON("package.json"),

        // Banner definitions
        meta: {
            banner: "/*\n" +
                " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
                " *  <%= pkg.description %>\n" +
                " *  <%= pkg.homepage %>\n" +
                " *\n" +
                " *  Made by <%= pkg.author.name %>\n" +
                " *  Under <%= pkg.license %> License\n" +
                " */\n"
        },

        // Concat definitions
        concat: {
            options: {
                banner: "<%= meta.banner %>"
            },
            dist: {
                src: [
                    "src/autocomplete.js",
                    "src/addanother.js",
                    "src/remote.js",
                    "src/text_widget.js",
                    "src/widget.js"
                ],
                dest: "dist/jquery.autocomplete-light.js"
            }
        },

        // Lint definitions
        jshint: {
            files: [
                "src/autocomplete.js",
                "src/addanother.js",
                "src/remote.js",
                "src/text_widget.js",
                "src/widget.js"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        // Minify definitions
        uglify: {
            my_target: {
                src: ["dist/jquery.autocomplete-light.js"],
                dest: "dist/jquery.autocomplete-light.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

        // watch for changes to source
        // Better than calling grunt a million times
        // (call 'grunt watch')
        watch: {
            files: ['src/*'],
            tasks: ['default']
        },

        qunit: {
            all: ['test/**/*.html']
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-qunit");

    grunt.registerTask("build", ["concat", "uglify"]);
    grunt.registerTask("default", ["jshint", "qunit", "build"]);
    grunt.registerTask("travis", ["default"]);

};
