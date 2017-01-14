# Principais Pacotes

## Base
- gulp
- gulp-sass
- gulp-rename
- gulp-concat

## Minificação
- gulp-cssnano

Como usar
```js
gulp.task('css:min', function() {
  return gulp.src(input)
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest(output));
});
```

- gulp-uglify

Como usar
``` js
gulp.task('js:min', function() {
  return gulp.src(input)
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(output));
});

```

- gulp-htmlmin

Como usar:
```js
gulp.task('html:min', function() {
  return gulp.src(htmlIn)
    .pipe(rename({suffix: '.min'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlDist))
});
```

- gulp-imagemin

Como usar:
```js
gulp.task('img:min',function() {
  return gulp.src('./app/img/*.+(jpg|jpeg|png|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'));
});
```

## Livereolad
- browser-sync
