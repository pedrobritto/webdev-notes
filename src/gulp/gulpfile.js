// Gulpfile example for a simple web development workflow


// Requires
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create();

// Paths
var input		= './app/sass/main.sass',
		inputAll= './app/sass/**/*.sass',
		output	= './app/css';

// General Tasks
gulp.task('sass', function() {
	return gulp.src(input)
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest(output))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})
});

// Watch Tasks
gulp.task('sass:watch', function() {
	gulp.watch(inputAll, ['sass']);
});

gulp.task('livereload', ['browserSync', 'sass'], function() {
	gulp.watch(inputAll, ['sass']);
	gulp.watch('./app/*.html', browserSync.reload);
	gulp.watch('./app/js/**/*.js', browserSync.reload);
})
