module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/app/scripts/directives/pipptimelinejs.js',
        dest: 'build/angular-timelinejs.min.js'
      }
    },

    copy: {
      main: {
        files: [
          {src: ['src/app/scripts/directives/pipptimelinejs.js'],
           dest: 'build/angular-timelinejs.js'}
        ]
      },
      pipptimeline: {
        files: [
          {src: ['src/app/scripts/directives/pipptimelinejs.js'],
           dest: 'demo/angular-timelinejs-demo/app/bower_components/angular-timelinejs/build/angular-timelinejs.js'}
        ],

      }
    },

    watch: {
      gruntfile: {
        files: 'src/app/scripts/directives/pipptimelinejs.js',
        tasks: ['uglify', 'copy:main', 'copy:pipptimeline'],
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        //background: true // don't block other grunt tasks
      },
      //       //continuous integration mode: run tests once in PhantomJS browser.
      //       continuous: {
      //         configFile: 'karma.conf.js',
      //         singleRun: true,
      //         browsers: ['PhantomJS']
      //       }
    }

  });

  // Load the plugins to provide tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy:main', 'watch', 'karma']);

};
