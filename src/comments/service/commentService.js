app.factory('commentService', ['serviceService', '$http', '$q', '$log', function(serviceService, $http, $q, $log) {

  return {
    list: function(shareid) {
      var url = '/api/res/' + shareid + '/comments';
      return serviceService.get(url);
    },

    share: function(shareid) {
      var url = 'api/res/' + shareid;
      return serviceService.get(url);
    },

    addComment: function(comment, resId) {
      var api = 'api/res/' + resId + '/comments';
      return serviceService.processAjaxPromise($http.post(api, comment));
    }
  };
}]);
