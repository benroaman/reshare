app.controller('MainNavCtrl',
  ['serviceService', '$location', 'StringUtil', function(serviceService, $location, StringUtil) {
    var self = this;

    // self.loggedIn = true;

    // try {
    //   serviceService.get('/api/users/me');
    //   alert('fuck');
    // } catch(err) {
    //   self.loggedIn = false;
    //   alert('success');
    // }

    self.isActive = function (path) {
      // The default route is a special case.
      if (path === '/') {
        return $location.path() === '/';
      }

      return StringUtil.startsWith($location.path(), path);
    };
    //
    // self.toggleLoggedIn = function () {
    //   self.loggedIn = !self.loggedIn;
    // }
  }]);
