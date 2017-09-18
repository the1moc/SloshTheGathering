////////
//////// NOT USED ANYMORE
///////

const webpackConfig = require("./webpack.config");

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        tslint: {
            options: {
                configuration: "tslint.json",
            },
            all: {
                src: ["src/**/*.ts", "!node_modules/**/*.ts", "!node_modules/**/*.js"]
            }
        },
        webpack: {
            prod: webpackConfig
        },
        watch: {
            scripts: {
                files: ["src/*.ts"],
                tasks: ["tslint", "webpack"]
            }
        },
        connect: {
            root: {
                options: {
                    index: "index.html",
                    keepalive: true,
                    hostname: "*",
                    port: 8000
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");

    // Default tasks.
    grunt.registerTask("build", ["tslint", "webpack"]);
    grunt.registerTask("buildandrun", ["tslint", "webpack", "connect"]);
    grunt.registerTask("run", ["connect"]);
};