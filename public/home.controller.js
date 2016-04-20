app.controller("homeController", home);

app.$inject = ["userService"];

function home(userService) {
  user = userService.getUser();
  user.then(function(info){
    vm.user=info.data;
  })
  var vm = this;
  vm.message = "Welcome home,"
}
