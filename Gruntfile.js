module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      folder: 'dist/'
    },
    ts: {
      options: {
        compile: true,
        comments: false,
        target: 'es5',
        sourceMap: true,
        sourceRoot: 'src',
        fast: 'watch',
        module: 'amd',
        jsx: 'react'
      },
      dev : {
        src: ["src/**/*.tsx"],
        out: 'dist/index.js',
        watch: 'src'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'dist/bundle.min.js': ['dist/index.js']
        }
      }
    }
  });
  
  // Load the plugin that provides cleaning
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Load the plugin that provides tsx compiling
  grunt.loadNpmTasks("grunt-ts");
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "watch" task
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Load the plugin that provides Sass compiling
  grunt.loadNpmTasks('grunt-contrib-compass');
  // Load the plugin that probides JS validation
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load the plugin that provides HTML validation
  grunt.loadNpmTasks('grunt-htmlhint');
  // Load the plugin that enables autoprefixing
  grunt.loadNpmTasks('grunt-autoprefixer');
  // Load the plugin that optimizes CSS rule-lists
  grunt.loadNpmTasks('grunt-cssc');
  // Loads the plugin that provides CSS minification
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task
  grunt.registerTask('default', ['clean', 'ts:dev']);

  grunt.registerTask('prod', ['uglify']);

};