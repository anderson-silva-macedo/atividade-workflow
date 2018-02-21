var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// compilando .scss => .css, concatenando, renomeando arquivo e minificando css.

gulp.task('sass-css', function() {
	return gulp.src('./source/scss/*.scss')
		.pipe(sass())
    .pipe(concat('estilo.css'))
    .pipe(minifyCss({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/css'));
});

// minificando o html.

gulp.task('minificar-html', function() {
	return gulp.src('./source/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/'));
});

// monitorando tasks

gulp.task('watch', function() {
	gulp.watch('./source/*.html', ['minificar-html']);
	gulp.watch('./source/scss/*.scss', ['sass-css']);
});
