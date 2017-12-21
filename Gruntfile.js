module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
    dist: {
        src: [
            'public/js/libs/*.js',
            'public/js/app.js'
        ],
        dest: 'js/build/production.js',
        }
    },
    uglify: {
        build: {
            src: 'public/js/build/production.js',
            dest: 'public/js/build/production.min.js'
        }
    },
    sass: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'public/css/build/main.css': 'public/css/main.scss'
        }
      }
    },
    watch: {
    scripts: {
        files: ['js/*.js'],
        tasks: ['concat','uglify'],
        options: {
            spawn: false,
        },
      },
    css: {
      files: ['css/*.scss'],
      tasks: ['sass'],
      options: {
          spawn: false,
      }
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['concat','uglify','sass','watch']);

};
