var gulp = require('gulp');
var sass = require('gulp-sass');
var path  = require("path");

const source = path.resolve(__dirname, './public/stylesheet')


gulp.task('sass', function () {
  return gulp.src( source + '/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest( source + '/css/'));
});
 
// Tâche "build"
gulp.task('build', ['sass']);

// Tâche "watch" = je surveille *less
gulp.task('watch', function () {
    gulp.watch(source +'/scss/*.scss', ['build']);
});

