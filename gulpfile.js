

const { src, dest, watch, parallel, series } = require("gulp")
const htmlmin = require("gulp-htmlmin")
const replace = require('gulp-replace');
const processhtml = require('gulp-processhtml')


var globs={
  html:"Ahmed Mahfouz task/*.html",
  css:"Ahmed Mahfouz task/assets/css/**/*.css",
  img:'Ahmed Mahfouz task/assets/imgs/*',
  js:'Ahmed Mahfouz task/assets/js/*.js'
}


function htmlTask() {
    return src(globs.html)
    .pipe(processhtml())
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest("dist"));
}

exports.html = htmlTask

var concat = require("gulp-concat")
const cleanCss = require('gulp-clean-css');
function cssTask() {
    return src(globs.css)
        .pipe(concat('style.min.css'))
        .pipe(replace(/(url()(..\/imgs\/\w+(.svg|.gif|.png|.jpg)))/gi, '$1../$2'))
        .pipe(cleanCss())
        .pipe(dest('dist/assets/css'))
}

exports.css = cssTask

const imagemin = require('gulp-imagemin');
function imgTask() {
    return src(globs.img)
        .pipe(imagemin())
        .pipe(dest('dist/imgs'));
}

exports.img = imgTask


const terser = require('gulp-terser');

function jsTask() {
    return src(globs.js) 
        .pipe(concat('all.min.js'))
        .pipe(terser())
        .pipe(dest('dist/assets/js',{sourcemaps:'.'}))
}
exports.js = jsTask



//watch task
function watchTask() {
  watch(globs.html,htmlTask)
  watch(globs.css, cssTask);
  watch(globs.img, imgTask);
  watch(globs.js, jsTask);
  
}


exports.default = series( parallel(htmlTask,cssTask,imgTask, jsTask,), watchTask)