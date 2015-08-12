/**
* Dependencies.
*/
var gulp    = require('gulp');

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*','browser-sync', 'browserify','watchify', 'vinyl-source-stream','brfs']
});

function getTask(task) {
    return require('./gulp_tasks/' + task)(gulp, plugins);
}

// Tasks development
gulp.task('stylus', getTask('stylus'));
gulp.task('jade', getTask('jade'));
gulp.task('jadeProd', getTask('jadeProd'));
gulp.task('browserSync',getTask('browserSync'));
gulp.task('browserify',getTask('browserify'));

gulp.task('js-watch',['browserify'],plugins.browserSync.reload);

gulp.task('watch', function(){
	gulp.watch(['public/css/stylus/**/*.styl'],['stylus']);
	gulp.watch(['public/js/app/**/*.jade'],['jade']);
	gulp.watch(['public/index.jade'],['jadeProd']);
	// gulp.watch(['dist/index.html','dist/css/styles.css'],plugins.browserSync.reload);
	// gulp.watch(['public/js/app/**/*.js','public/js/app/**/*.html'],['js-watch']);
});

// Task development
gulp.task('default',plugins.sequence(['jade','jadeProd'],'browserify','stylus','browserSync','watch'));

//task production
// gulp.task('prod', plugins.sequence('js-prod','moveTemplates'));