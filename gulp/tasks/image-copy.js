var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var C = require('../config');
var changed = require('gulp-changed');

// src/img -> dest へコピーする
gulp.task('imgCopy', function () {
    return gulp.src(C.src.imgCopy)
    .pipe(changed(C.dest.img))  // 変更ファイルのみコピー
    .pipe(gulp.dest(C.dest.img));
});
