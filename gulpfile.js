var gulp = require('gulp');
var gulpAtom = require('gulp-atom');

gulp.task('atom', function() {
    return gulpAtom({
        srcPath: './src',
        releasePath: './release',
        cachePath: './cache',
        version: 'v0.20.1',
        rebuild: false,
        platforms: ['win32-ia32', 'darwin-x64', 'linux-x64']
    });
});


