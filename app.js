var express = require("express");
var bodyParser= require("body-parser");
var mongo = require('mongodb');
var app = express();
var myClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/test";

app.use(bodyParser.json());

app.use(express.static("./public"));

app.get("/user", function(req, res){
  var user = {
    name: "Brian",
    location: "Newport Beach"
  }
  res.json(user);
})

app.get("/get", function(req,res){

  myClient.connect(url, function(error, database){
    if(!error){
      var todo = database.collection("todo");
      todo.find({name: "new"}).toArray(function(err, docs){
        res.send(docs[0].list);
        database.close();
      });
    }
  })
})

app.put("/put", function(req, res){
  var todoArray = req.body;
  myClient.connect(url, function(error, database){
    var todo = database.collection("todo");
    todo.update(
      {name: "new"},
      {$set: {list: todoArray}}
      , function(result, error){
      res.sendStatus(200);
      database.close();
      })
    })
  })

app.listen(1337);
