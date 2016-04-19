var page = require('webpage').create();
console.log("test");
page.open('http://localhost:1337', function(status){
  console.log("test2");
  page.evaluate(function(){
    document.getElementById("1").click();
  })
  setTimeout(function(){
    page.render('homepage.png');
    phantom.exit();
  },2000)
});
