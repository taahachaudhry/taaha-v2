var gulp    = require('gulp');
var eslint  = require('gulp-eslint');

gulp.task('eslint', function() {
  return gulp.src('src/js/**')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(gulp.dest('../taahachaudhry.github.io/js'));
});
