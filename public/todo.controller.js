var app = angular.module("todo");

app.controller('todoController', todo);

app.directive("todo", todoDirective);

function todoDirective(){
  return {
    templateUrl: "home/todo.controller.html"
  }
}

app.$inject = ['$http'];

function todo($http){
  vm = this;
  var todo = $http.get("http://localhost:1337/get");
  todo.then(function(todo){
    vm.list = todo.data;
  })
  vm.finished = function(item){
    var position= vm.list.indexOf(item);
    vm.list.splice(position, 1);
    var postChange = $http.delete("http://localhost:1337/delete", item);
  }
  vm.add = function(inputTodo){
    if(inputTodo){
      var task = {name: inputTodo, date: Date.now()+172800000};
      vm.list.push(task);
      var postChange = $http.post("http://localhost:1337/post", task);
    }
  }
}
