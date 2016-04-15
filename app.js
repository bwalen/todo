var express = require("express");
var app = express();

app.use(express.static("./public"));

app.get("/user", function(req, res){
  var user = {
    name: "Brian",
    location: "Newport Beach"
  }
  res.json(user);
})

app.get("/todos/:user", function(req,res){
  if (req.params.user == "Ron"){
    var todos = ["Learn Javascript.", "Eat", "Sleep"];
    res.send(todos);
  }
  else{
    res.sendStatus(404);
  }
})

app.listen(1337);
