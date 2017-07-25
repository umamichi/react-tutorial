var gulp = require('gulp');
var C = require('../config');

// 実行
gulp.task('default', ['imgCopy', 'ejs', 'sass', 'watch']);
