var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', ['karma', 'iconFont'], function() {
  // This runs only if the karma tests pass
  gulp.start(['markup', 'images', 'minifyCss', 'uglifyJs']);
});
