// Requires

/**
 *
 * npm install --only=dev
 * to install only devDependencies in package.json
 *
 **/

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),

    cssnano     = require('gulp-cssnano'),
    uglify      = require('gulp-uglify'),
    htmlmin     = require('gulp-htmlmin'),
    imagemin    = require('gulp-imagemin'),

    browsersync = require('browser-sync').create();

// Paths
var cssIn     = './app/sass/styles.sass',
    cssInAll  = './app/sass/**/*.sass',
    cssOut    = './app/css/',
    cssDist   = './dist/css/',

    jsInAll   = './app/js/**/*.js',
    jsOut     = './app/js/',
    jsDist    = './dist/js/',

    htmlIn    = './app/index.html',
    htmlDist  = './dist/';


///////////////////
// General Tasks //
///////////////////

gulp.task('sass', function() {
  return gulp.src(cssIn)
    .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
    .pipe(gulp.dest(cssOut))
    .pipe(browsersync.reload({
      stream: true
    }));
});


gulp.task('sass:min', function() {
  return gulp.src(cssIn)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(cssOut))

    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest(cssOut));
});


gulp.task('js:min', function() {
  return gulp.src(jsInAll)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsOut))

    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(jsOut));
});


gulp.task('html:min', function() {
  return gulp.src(htmlIn)
    .pipe(rename({suffix: '.min'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlDist))
});


gulp.task('browsersync', function() {
  browsersync.init({
    server: {
      baseDir: 'app'
    }
  });
});


//////////////////////////////
// Production exports Tasks //
//////////////////////////////

gulp.task('prod', ['prod:html', 'prod:css', 'prod:js', 'prod:img'])

gulp.task('prod:js',function() {
  return gulp.src(jsInAll)
    .pipe(concat('scripts.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(jsDist));
});

gulp.task('prod:css',function() {
  return gulp.src(cssIn)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDist))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest(cssDist));
});

gulp.task('prod:html',function() {
  return gulp.src(htmlIn)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('prod:img',function() {
  return gulp.src('./app/img/*.+(jpg|jpeg|png|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'));
});

/////////////////
// Watch Tasks //
/////////////////

gulp.task('sass:watch', function() {
  gulp.watch(cssInAll, ['sass']);
});

gulp.task('default', ['browsersync', 'sass'], function() {
  gulp.watch(cssInAll, ['sass']);
  // reload after changes in html and js files
  gulp.watch('./app/**/*.html', browsersync.reload);
  gulp.watch('./app/**/*.js', browsersync.reload);
});
