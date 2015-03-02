app.factory('shareService', ['serviceService', '$http', '$q', '$log', function(serviceService, $http, $q, $log) {

  return {
    list: function () {
      return serviceService.get('/api/res');
    },

    getById: function (resId) {
      if (!resId) {
        throw new Error('getById requires a resource id');
      }

      return serviceService.get('/api/res/' + resId);
    },

    addShare: function (res) {
      return serviceService.processAjaxPromise($http.post('/api/res', res));
    },

    upVote: function (resId) {
      var url = 'api/res/' + resId + '/votes';
      return serviceService.processAjaxPromise($http.post(url, { vote: 1 }));
    },

    downVote: function (resId) {
      var url = 'api/res/' + resId + '/votes';
      return serviceService.processAjaxPromise($http.post(url, { vote: -1 }));
    },

    unVote: function (resId) {
      var url = 'api/res/' + resId + '/votes';
      return serviceService.processAjaxPromise($http.post(url, { vote: 0 }));
    }
  };
}]);
