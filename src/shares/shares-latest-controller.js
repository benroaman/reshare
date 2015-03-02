app.config(['$routeProvider', function($routeProvider) {
  var routeDefinition = {
    templateUrl: 'shares/shares-latest.html',
    controller: 'SharesLatestCtrl',
    controllerAs: 'vm',
    resolve: {
      resources: ['shareService', function(shareService) {
        return shareService.list();
      }]
    }
  };

  $routeProvider.when('/shares/latest', routeDefinition);

}])
.controller('SharesLatestCtrl', ['resources', 'shareService', function (resources, shareService) {
  // TODO: load these via AJAX
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
