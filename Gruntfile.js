module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cuketree: {
      run: {},
      ide: {
        options: {
          config: 'ide',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-cuke-tree');

  grunt.registerTask('default', ['cuketree:run']);

};