app.factory('usersService', ['serviceService', '$http', '$q', '$log', function(serviceService, $http, $q, $log) {

  return {
    list: function () {
      return serviceService.get('/api/users');
    },

    getByUserId: function (userId) {
      if (!userId) {
        throw new Error('getByUserId requires a user id');
      }

      return serviceService.get('/api/users/' + userId);
    },

    addUser: function (user) {
      return serviceService.processAjaxPromise($http.post('/api/users', user));
    }
  };
}]);
