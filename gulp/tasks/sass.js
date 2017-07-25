var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var C = require('../config');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');

var sassOption = {
    style       : 'expanded',
    sourcemap   : true,
    noCache     : true
};

// sassコンパイル
gulp.task('sass', function () {
    sass(C.src.sass, sassOption)
        .on('error', handleErrors)
        .pipe($.plumber())
        .pipe($.autoprefixer({ browsers : C.autoprefixer_browsers }))
        .pipe(gulp.dest(C.dest.sass))
        .pipe(browserSync.reload({ stream : true }));
});
