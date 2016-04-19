var page = require('webpage').create();
page.open('http://localhost:1337/#/todo', function() {
  setTimeout(function(){
    page.render('homepage.png');
    phantom.exit();
  },2000)
});
