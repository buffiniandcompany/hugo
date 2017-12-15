/*!
* How to install and use gulp
* Install Node at www.node.js
* Install Gulp globally on your computer with command, 'sudo npm install gulp -g' (exclude sudo on pc)
* Change directory in command line. Point to theme folder (example: cd /Users/DanielO/Desktop/buffiniandcompany.dev/wp-content/themes/buffini-and-company)
* Install gulp on theme directory with this command: 'npm install gulp --save-dev'
* Run command: 'npm install gulp-sass gulp-autoprefixer gulp-cssnano gulp-rename gulp-changed --save-dev'
* Run command: 'gulp' to run the gulp tasks listed below (i.e. compiling sass and seeing changes live in the browser)
*/


// Load gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
		rename = require('gulp-rename')
;

gulp.task('sass', function () {
	return gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(autoprefixer('last 5 version'))
	.pipe(gulp.dest('static/styles'))
	.pipe(cssnano())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('static/styles'))
});
 
gulp.task('default', ['sass'], function () {
	gulp.watch("src/scss/**/*.scss", ['sass']);
});