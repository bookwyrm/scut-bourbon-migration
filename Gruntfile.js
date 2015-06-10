/* global module */
module.exports = function(grunt) {

  grunt.initConfig({
    meta: {},

    sass: {
      dev: {
        options: {
          sourceMap: true,
          outputStyle: 'nested'
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: './',
          ext: '.css'
        }]
      },
      prod: {
        options: {
          sourceMap: false,
          outputStyle: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: './',
          ext: '.css'
        }]
      }
    },

    scsslint: {
      allFiles: [
        'scss/**/*.scss'
      ],
      options: {
        config: '.scss-lint.yml',
        colorizeOuput: true
      }
    },

    watch: {
      sass: {
        files: ['scss/{,*/}*{scss,sass}'],
        // Purposely linting after sass compilation to optimize for faster development
        tasks: ['sass:dev', 'scsslint']
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-scss-lint');
};




