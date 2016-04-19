var page = require('webpage').create();
page.open('http://localhost:1337', function(status){
  page.evaluate(function(){
    document.getElementsByTagName("a")[0].click();
  })
  setTimeout(function(){
    page.render('homepage.png');
    phantom.exit();
  },2000)
});
