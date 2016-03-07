var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('./stylesheets/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);