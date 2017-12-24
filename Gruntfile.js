module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
    dist: {
        src: [
            'public/js/libs/*.js',
        ],
        dest: 'public/js/build/production.js',
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
    concurrent: {
        target: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    },
    watch: {
    scripts: {
        files: ['./public/js/*.js'],
        tasks: ['concat','uglify'],
        options: {
            spawn: false,
        },
    },
    css: {
          files: ['./public/css/*.scss'],
          tasks: ['sass'],
          options: {
              spawn: false,
          },
        }
    },
    nodemon: {
      dev: {
        script: './start.js'
      }
    },
});
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('grunt-concurrent');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['concat','uglify','sass','concurrent:target']);

};
