var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var mocha = require('gulp-mocha');
var exec = require('child_process').exec;
var casperJs = require('gulp-casperjs');
var app = require('./app.js');
var child = exec('node app.js');

gulp.task("server", function(){
  console.log("Starting Server");

})

gulp.task("killserver", function(){
  child.kill();
})

gulp.task("firstTest", function(){
  return (gulp.src("app.spec.js", {read:false}).pipe(mocha()));
})

gulp.task("secondTest", function(){

  gulp.src("casper.spec.js").pipe(casperJs());
})

gulp.task("default", ["server","firstTest","secondTest","killserver"]);
