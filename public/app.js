var app = angular.module("todo", []);

app.controller("homeController", home);

app.$inject = ["$http"];

function home($http) {
  var user = $http.get("http://localhost:1337/user");
  user.then(function(info){
    vm.user=info.data;
  })
  var vm = this;
  vm.message = "Welcome home,"
}

app.controller('todoController', todo);

app.$inject = ['$http'];

function todo($http){
  vm = this;
  var todo = $http.get("http://localhost:1337/get");
  todo.then(function(todo){
    vm.list = todo.data[0].list;
  })
  vm.finished = function(item){
    var position= vm.list.indexOf(item);
    vm.list.splice(position, 1);
    var postChange = $http.put("http://localhost:1337/put", vm.list);
  }
  vm.add = function(inputTodo){
    vm.list.push(inputTodo);
    var postChange = $http.put("http://localhost:1337/put", vm.list);
  }
}
