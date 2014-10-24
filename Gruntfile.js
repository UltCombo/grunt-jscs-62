'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		jscs: {
			options: {
				config: '.jscsrc',
				esnext: true,
			},
			src: ['index.js'],
		},
	});

	grunt.registerTask('default', ['jscs']);
};
