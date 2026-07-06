const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')

function styles(){ //função de compressão e transformação do sass para css
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}


exports.default = images

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, styles)
}