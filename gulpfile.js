var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({ noImplicitAny: true, }))
        .pipe(gulp.dest('src/dist'));
});
 
gulp.task('watch', function() {
    gulp.watch('src/ts/*.ts', ['scripts']);
});