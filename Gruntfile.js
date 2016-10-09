module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve: {
      default: {
        options: {
            port: 8080
        }
      }
    },
    clean: {
      folder: 'dist/', 
      files: 'dist/MainComponent.js'
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'dist/app.css': 'src/components/MainComponent.scss'
        }
      }
    },
    copy: {
      main: {
        expand: true,
        src: 'src/static/*',
        dest: 'dist/'
      }
    },
    browserify: {
      main: {
        src: 'dist/MainComponent.js',
        dest: 'dist/app.js'
      }
    },
    tslint: {
      options: {
        configuration: 'tslint.json',
        force: false
      },
      files: {
        src: ['src/**/*.tsx']
      }
    },
    ts: {
      default: {
        tsconfig: true,
        src: ["src/**/*.tsx"]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'dist/app.min.js': ['dist/app.js']
        }
      }
    }
  });
  
  // Load the plugin that provides cleaning
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Load the plugin that starts the static server
  grunt.loadNpmTasks('grunt-serve');
  // Load the plugin that copies assets
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Load the plugin that provides tsx compiling
  grunt.loadNpmTasks("grunt-ts");
  // Load the plugin that probides support for 'require' directive
  grunt.loadNpmTasks('grunt-browserify');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "watch" task
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Load the plugin that provides Sass compiling
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Load the plugin that probides TS validation
  grunt.loadNpmTasks("grunt-tslint");
  // Load the plugin that provides HTML validation
  grunt.loadNpmTasks('grunt-htmlhint');
  // Load the plugin that auto-inserts vendor prefixes
  grunt.loadNpmTasks('grunt-autoprefixer');
  // Load the plugin that optimizes CSS rule-lists
  grunt.loadNpmTasks('grunt-cssc');
  // Loads the plugin that provides CSS minification
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Tasks
  grunt.registerTask('server', ['serve']);
  grunt.registerTask('dev', ['clean:folder', 'sass', 'tslint', 'ts', 'browserify', 'tslint', 'copy', 'clean:files']);
  grunt.registerTask('prod', ['clean:folder', 'tslint', 'ts', 'browserify', 'tslint', 'uglify', 'copy', 'clean:files']);

};