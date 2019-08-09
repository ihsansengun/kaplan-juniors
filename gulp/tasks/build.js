const gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "doc"
    }
  });
});


gulp.task('deleteDistFolder', function() {
  return del("./doc");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  const pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**',
      '!./app/vendor',
      '!./app/vendor/**'
  ];

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./doc"));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(gulp.dest("./doc/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
  return gulp.src("./app/*.html")
    .pipe(usemin({
      css: [ function() {return cssnano()}],
      js: [function() {return uglify()}]
    }))
    .pipe(gulp.dest("./doc"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);

