/*global module:false*/

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
		  development: {
		    files: {
		      "dist/main.css": "src/main.less"
		    }
		  },
		  production: {
		    options: {
		      yuicompress: true
		    },
		    files: {
		      "dist/main.css": "src/main.less"
		    }
		  }
		},
    // Before generating any new files, remove any previously-created files.
    clean: ['dist'],
    copy: {
		  main: {
		    files: [
		      {expand: true, cwd: 'src/', src: ['images/*'],  dest: 'dist/', filter: 'isFile'}, // includes files in path
	      ]
	    }
	  }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', ['clean', 'copy', 'less']);

};