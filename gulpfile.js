// Include gulp
var gulp = require('gulp');

// Load Plugins
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

var dest = 'build/';


gulp.task('js', function() {

	var jsFiles = ['src/js/*.js'];
	gulp.src(plugins.mainBowerFiles().concat(jsFiles))
		.pipe(plugins.filter('**/*.js'))
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(dest + '/js'));

});

gulp.task('css', function() {

	var cssFiles = ['src/css/*'];

	return gulp.src(plugins.mainBowerFiles().concat(cssFiles))
		.pipe(plugins.filter('**/*.css'))
		.pipe(plugins.concat('main.css'))
		// .pipe(plugins.uglify())
		.pipe(gulp.dest(dest + 'css'));

});

// // Compile sass files
// gulp.task('sass', function() {
//   return plugins.rubySass('src/scss/style.scss', {
//       style: 'compressed'
//     })
//     .pipe(plugins.rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest('build/css'));
// });
//
// // Image optimization
// gulp.task('images', function() {
//   return gulp.src('src/images/**/*')
//     .pipe(plugins.cache(plugins.imagemin({
//       optimizationLevel: 5,
//       progressive: true,
//       interlaced: true
//     })))
//     .pipe(gulp.dest('build/img'));
// });

// Watch for changes
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('src/js/*', ['js']);
  // Watch .css files
  gulp.watch('src/css/*', ['css']);
	// Watch html files
	gulp.watch('src/**/*.html', ['copy']);
  // Watch image files
  // gulp.watch('src/images/**/*', ['images']);
});

// Copy
gulp.task('copy', function() {
	sourceFiles = 'src/**/*.html';
	gulp.src(sourceFiles)
		.pipe(gulp.dest(dest));
});


// Serve
gulp.task('serve', plugins.serve('build'));

// Default Task
gulp.task('default', ['js', 'css', 'copy', 'watch', 'serve']);
