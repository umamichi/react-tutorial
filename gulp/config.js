var src = './src';        // 元ファイル
var dest = './dest';      // コンパイル先
var jsSrc = src + '/js';  // jsファイルの元パス

module.exports = {

    'src': {
      'root' : src,
      'copy' : src + '/copy',
      'sass' : src + '/sass',
      'ejs'  : [src + '/**/*.ejs', '!' + src + '/**/_*.ejs'],
      'imgCopy'  : [src + '/img/**/*.{gif,jpg,jpeg,png,svg}', '!' +src+ '/img/sprite/**/*'],
      'img'  : [src + '/img/**/*.{gif,jpg,jpeg,png,svg}', '!' +src+ '/img/sprite/**/*']
    },

    'dest': {
      'root' : dest,
      'copy' : dest,
      'sass' : dest + '/css',
      'ejs'  : dest,
      'img'  : dest + '/img'
    },

    //browserSyncの設定
    browserSync: {
        server: {
            baseDir: dest
        }
    },

    // autoprefixerの設定
    autoprefixer_browsers: [
        'ie >= 8',
        'ff >= 32',
        'chrome >= 42',
        'safari >= 7',
        'ios >= 6',
        'android >= 2.3'
    ],

    // browserifyの設定
    browserify: {
        bundleConfigs: [
            {
                entries: jsSrc + '/main.js',
                dest: dest + '/js',
                outputName: 'main.js'
            }
        ]
    },

    // jshintの対象ファイル
     lintfiles:[
        jsSrc + '/*.js'
    ]
};
