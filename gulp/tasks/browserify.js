var watchify    = require('watchify');
var browserify  = require('browserify');
var gulp        = require('gulp');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var gutil       = require('gulp-util');
var sourcemaps  = require('gulp-sourcemaps');
var assign      = require('lodash.assign');
var connect     = require('gulp-connect');
var config      = require('../config');

var customOpts = {
  entries: [config.browserify.src],
  extensions: ['.js'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

gulp.task('browserify', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(connect.reload())
    .pipe(gulp.dest('../taahachaudhry.github.io/js'));
}
