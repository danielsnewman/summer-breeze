module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
          src: 'js/app.js',
          dest: 'js/build/app.min.js'
      }
    },
    sass: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/build/main.css': 'css/main.scss'
        }
      }
    },
    watch: {
    scripts: {
        files: ['js/*.js'],
        tasks: ['uglify'],
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
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['uglify','sass','watch']);

};
