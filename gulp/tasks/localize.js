
var projectName = "kaplan-juniors";
var lang = "tr";


var gulp = require('gulp'),
i18n = require('gulp-i18n-localize');


gulp.task('localize', function () {
    return gulp.src('elandww/master/index.html')
        .pipe(i18n({
            locales: ['tr'],
            localeDir: 'gulp/locales'
        }))
        .pipe(gulp.dest('elandww/transilation'));
});



gulp.task('copyMaster', function() {
    return gulp.src('elandww/en/'+ projectName + '/index.html')

        .pipe(gulp.dest('elandww/master/'));

});


