var chai = require("chai");
var request = require("request");
var assert = chai.assert;

var app = require('./app.js');
var RANDOMIZE = 0;
var server = app.listen(RANDOMIZE);
var port = server.address().port;


describe("Todos Route Testing", function(){
  it("Get", function(done){
    request("http://localhost:" + port + "/get", function(error, response, body){
      if(!error && response){
        done();
      }
    })
  })
  it("Post", function(done){
    request("http://localhost:" + port + "/post", function(error, response, body){
      if(!error && response){
        done();
      }
    })
  })
  it("Put", function(done){
    request("http://localhost:" + port + "/put", function(error, response, body){
      if(!error && response){
        done();
      }
    })
  })
  it("Testing", function(done){
    request("http://localhost:" + port + "/delete", function(error, response, body){
      if(!error && response){
        done();
      }
    })
  })
  after(function(done){
    server.close();
    done();
  })
})
