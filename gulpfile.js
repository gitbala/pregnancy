var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('build', ['styles']);

gulp.task('default', ['build']);