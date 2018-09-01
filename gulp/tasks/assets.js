var gulp          = require('gulp');
var connect       = require('gulp-connect');
var distConfig    = require('../config').dist;

gulp.task('assets', function() {
  gulp.src(distConfig.src + '/assets/**')
    .pipe(connect.reload())
    .pipe(gulp.dest(distConfig.dest + '/assets/'))
});
