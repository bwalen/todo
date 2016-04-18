var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var mocha = require('gulp-mocha');
var exec = require('child_process').exec;


gulp.task("test", function(){
  return (gulp.src("app.spec.js", {read:false}).pipe(mocha()));
})

gulp.task("default", ["test"]);
