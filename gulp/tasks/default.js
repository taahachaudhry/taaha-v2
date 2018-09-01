var gulp    = require('gulp');
var watch   = require('gulp-watch');
var config  = require('../config');


gulp.task('default', ['connectDev', 'scss', 'html', 'assets', 'browserify', 'eslint'], function() {
  gulp.watch(config.scss.src, ['scss']);
  gulp.watch(config.html.src, ['html']);
});
