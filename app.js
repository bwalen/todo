var express = require("express");
var app = express();

app.use(express.static("./public"));

app.get("/user", function(req, res){
  var user = {
    name: "Ron",
    location: "Newport Beach"
  }
  res.json(user);
})

app.get("/todos/:user", function(req,res){
  if (req.params.user == "Ron"){
    var todos = ["Teach Javascript.", "Go Home"];
    res.send(todos);
  }
  else{
    res.sendStatus(404);
  }
})

app.listen(1337);
