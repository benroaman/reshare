app.config(['$routeProvider', function($routeProvider) {
  var routeDefinition = {
    templateUrl: 'shares/shares-popular.html',
    controller: 'SharesPopCtrl',
    controllerAs: 'vm',
    resolve: {
      resources: ['shareService', function (shareService) {
        return shareService.list();
      }]
    }
  };

  $routeProvider.when('/', routeDefinition);
  $routeProvider.when('/shares', routeDefinition);
  $routeProvider.when('/shares/popular', routeDefinition);

}])
.controller('SharesPopCtrl', ['resources', 'shareService', function (resources, shareService) {
  var self = this;
  self.shares = resources;

  self.upVote = function(id) {
    shareService.upVote(id);
  }

  self.downVote = function(id) {
    shareService.downVote(id);
  }

  self.unVote = function(id) {
    shareService.unVote(id);
  }
}]);
