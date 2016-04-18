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
