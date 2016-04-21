var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var mocha = require('gulp-mocha');
var exec = require('child_process').exec;
var casperJs = require('gulp-casperjs');


gulp.task("firstTest", function(){
  return (gulp.src("app.spec.js", {read:false}).pipe(mocha()));
})

gulp.task("secondTest", function(){
  gulp.src("casper.spec.js")
  .pipe(casperJs());
})

gulp.task("default", ["firstTest","secondTest"]);
