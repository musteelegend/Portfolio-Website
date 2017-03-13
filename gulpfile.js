var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-clean-css');

gulp.task('images', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img/'));
});

gulp.task('styles', function(){
    gulp.src('css/*.css')
        .pipe(minifycss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('default', ['images','styles']);