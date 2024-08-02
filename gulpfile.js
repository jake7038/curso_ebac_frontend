var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle:   'compressed'
    }))
    .pipe(gulp.dest('./build/styles'));
}


exports.default = compilaSass;