app.controller('MainNavCtrl',
  ['serviceService', '$location', '$log', 'StringUtil', function(serviceService, $location, $log, StringUtil) {
    var self = this;

    serviceService.get('/api/users/me')
      .then(function(data) {
        self.currentUser = data;
      }).catch(function(err) {
        self.currentUser = undefined;
        $log.log(err);
      });

    self.currentUser = serviceService.get('/api/users/me');


    self.isActive = function (path) {
      // The default route is a special case.
      if (path === '/') {
        return $location.path() === '/';
      }

      return StringUtil.startsWith($location.path(), path);
    };

  }]);
