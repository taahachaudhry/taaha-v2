var gulp        = require('gulp');
var scsslint    = require('gulp-scss-lint');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var prefix      = require('gulp-autoprefixer');
var cache       = require('gulp-cached');
var connect     = require('gulp-connect');
var config      = require('../config');

// Lint all scss before compiling
gulp.task('scss-lint', function(cb) {
  gulp.src(config.scss.src)
    .pipe(cache('scsslint'))
    .pipe(scsslint({
      config: config.scss.lint,
      endless: true
    }));
  cb();
});

gulp.task('scss', ['scss-lint'], function() {
  gulp.src(config.scss.src)
    .pipe(sass())
    .on('error', errorHandler)
    .pipe(prefix({
      brosesrs: config.scss.autoprefixer
    }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(connect.reload())
    .pipe(gulp.dest(config.scss.dest));
});

function errorHandler(error) {
  /*eslint-disable no-console*/
  console.error(error.toString());
  this.emit('end');
}
