casper.test.begin("Testing Adding a todo", 2, function(test){
  casper.start("http://localhost:1337/#/todo");
  casper.wait(3000, function(){
    casper.then(function(){
      casper.echo(this.page.content);
      var initialSpans = casper.getElementsBounds("span").length;
      casper.sendKeys("#testing", "new item");
      casper.click("#button");
      var afterSpans = casper.getElementsBounds("span").length;
      test.assertTruthy(function(){
        return (initialSpans < afterSpans);
      }, "Successfully added a todo");
      casper.click("input.finished");
      var endSpans= casper.getElementsBounds("span").length;
      test.assertTruthy(function(){
        return (endSpans < afterSpans);
      }, "Successfully finished a todo");
    });
  })
  casper.run(function(){
    test.done();
  })
});
