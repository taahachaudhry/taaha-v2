var gulp      = require('gulp');
var connect   = require('gulp-connect');
var config    = require('../config').connect;

// Development Server
gulp.task('connectDev', function() {
  connect.server({
    root: config.distRoot,
    port: config.devPort,
    livereload: config.livereload
  });
});

// Distribution Server
gulp.task('connectDist', function() {
  connect.server({
    root: config.distRoot,
    port: config.distPort,
    livereload: config.livereload
  });
});
