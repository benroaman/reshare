app.factory('serviceService', ['$http', '$q', '$log', function($http, $q, $log) {

  return {
    get: function (url) {
      return this.processAjaxPromise($http.get(url));
    },

    processAjaxPromise: function(p) {
      return p.then(function (result) {
        return result.data;
      })
      .catch(function (error) {
        $log.log(error);
      });
    }

  };

}]);
