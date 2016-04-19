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
      todo.find({}).toArray(function(err, docs){
        res.send(docs);
        database.close();
      });
    }
  })
})

app.post("/post", function(req, res){
  myClient.connect(url, function(error, database){
    var todo = database.collection("todo");
    todo.insert(req.body, function(result, error){
      res.sendStatus(200);
      database.close();
    });
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

  app.delete("/delete", function(req, res){
    var todoArray = req.body;
    myClient.connect(url, function(error, database){
      var todo = database.collection("todo");
      todo.deleteOne(req.body, function(error, result){
        res.sendStatus(200);
        database.close();
      })
    })
  })

if(!require.main.loaded){
  var server = app.listen(1337);
}

module.exports = app;
