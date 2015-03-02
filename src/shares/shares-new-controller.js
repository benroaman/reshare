app.config(['$routeProvider', function($routeProvider) {
  var routeDefinition = {
    templateUrl: 'shares/shares-new.html',
    controller: 'SharesNewCtrl',
    controllerAs: 'vm',
  };

  $routeProvider.when('/shares/new', routeDefinition);

}])
.controller('SharesNewCtrl', ['Share', 'shareService', '$location', function (Share, shareService, $location) {

  var self = this;
  self.newShare = Share();

  self.addShare = function () {
    var share = Share(self.newShare);

    shareService.addShare(share).then(function () {
      $location.path('/shares/latest');
    });
    self.newShare = Share();
  }

}]);
