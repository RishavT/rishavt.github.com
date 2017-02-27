// Include gulp
var gulp = require('gulp');

// Load Plugins
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
  replaceString: /\bgulp[\-.]/
});

var dev_dest = 'dev/';
var build_dest = 'build/';


gulp.task('bowerJs', function() {

  gulp.src(plugins.mainBowerFiles())
    .pipe(plugins.filter('**/*.js'))
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(build_dest + 'bower_components/js'))
    .pipe(gulp.dest(dev_dest + 'bower_components/js'));

});

gulp.task('bowerCss', function() {

  return gulp.src(plugins.mainBowerFiles())
    .pipe(plugins.filter('**/*.css'))
    .pipe(plugins.concat('main.css'))
    // .pipe(plugins.uglify())
    .pipe(gulp.dest(build_dest + 'bower_components/css'))
    .pipe(gulp.dest(dev_dest + 'bower_components/css'));

});

// Image optimization
// gulp.task('images', function() {
//   return gulp.src('src/images/**/*')
//     .pipe(plugins.cache(plugins.imagemin({
//       optimizationLevel: 5,
//       progressive: true,
//       interlaced: true
//     })))
//     .pipe(gulp.dest('build/img'));
// });

// Copy Dev
gulp.task('copy-dev', function() {
  sourceFiles = 'src/**/*';
  gulp.src(sourceFiles)
    .pipe(gulp.dest(dev_dest));
});

// Watch for changes
gulp.task('watch-dev', function() {
  // Watch .js files
  gulp.watch('src/**/*', ['copy-dev']);
});


// Serve
gulp.task('serve-dev', plugins.serve(dev_dest));

// Default Task
gulp.task('default', ['bowerJs', 'bowerCss', 'copy-dev', 'watch-dev', 'serve-dev']);
