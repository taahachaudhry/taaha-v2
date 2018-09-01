var gulp        = require('gulp');
var watch       = require('gulp-watch');
var connect     = require('gulp-connect');
var htmlConfig  = require('../config').html;

gulp.task('html', function() {
  gulp.src(htmlConfig.src)
    .pipe(connect.reload())
    .pipe(gulp.dest(htmlConfig.dest));
});
