var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("js", function() {
  gulp.src(["app/**/*.module.js", "app/**/config*.js", "app/**/*.js"])
    .pipe(concat("benkyo.js"))
    .pipe(gulp.dest("dist"))
    .pipe(uglify())
    .pipe(rename({extname: ".min.js"}))
    .pipe(gulp.dest("dist"))
});
gulp.task("default", function() {
  gulp.start("js");
});
