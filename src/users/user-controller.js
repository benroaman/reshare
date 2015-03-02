app.config(['$routeProvider', function($routeProvider) {
  var routeDefinition = {
    templateUrl: 'users/user.html',
    controller: 'UserCtrl',
    controllerAs: 'vm',
    resolve: {
      user: ['$route', 'usersService', function ($route, usersService) {
        var routeParams = $route.current.params;
        return usersService.getByUserId(routeParams.userid);
      }],
      resources: ['shareService', function (shareService) {
        return shareService.list();
      }],
    }
  };

  $routeProvider.when('/users/:userid', routeDefinition);
}])
.controller('UserCtrl', ['serviceService', '$http', 'resources', 'user', function (serviceService, $http, resources, user) {
  var self = this;
  self.user = user;

  var newArr = []

  for (var i = 0; i < resources.length; ++i) {
    if (resources[i].userId === this.user.userId) {
      newArr.push(resources[i]);
    }
  }

  self.shares = newArr;

  self.deleteShare = function(share) {
    var index = self.shares.indexOf(share);
    self.shares.splice(index, 1);
    var url = '/api/res/' + share._id;
    return serviceService.processAjaxPromise($http.delete(url));
  }

}]);
