// Gulpfile for a simple web development workflow

// Requires
var gulp        = require('gulp'),
		sass        = require('gulp-sass'),
		browserSync = require('browser-sync').create();

// Paths
var input		= './app/scss/**/*.scscc',
		output	= './app/css';

// General Tasks
gulp.task('sass', function() {
	return gulp.src(input)
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest(output))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('sync', function() {
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

gulp.task('default', ['sync', 'sass'], function() {
	gulp.watch(input, ['sass']);
	gulp.watch('./app/**/*.html', browserSync.reload);
	gulp.watch('./app/js/**/*.js', browserSync.reload);
})
