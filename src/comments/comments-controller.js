app.config(['$routeProvider', function($routeProvider) {
  var routeDefinition = {
    templateUrl: 'comments/comments.html',
    controller: 'CommentsCtrl',
    controllerAs: 'vm',
    resolve: {
      comments: ['commentService', '$route', function(commentService, $route) {
        return commentService.list($route.current.params.shareid); // TODO: make this a thing
      }],
      share: ['commentService', '$route', function(commentService, $route) {
        return commentService.share($route.current.params.shareid); // TODO: make this a thing
      }]
    }
  };

  $routeProvider.when('/shares/:shareid/comments', routeDefinition);

}])
.controller('CommentsCtrl', ['$location', '$route', 'Comment', 'comments', 'share', 'commentService', function ($location, $route, Comment, comments, share, commentService) {

  var self = this;

  self.newComment = Comment();

  self.routeParams = $route.current.params;

  self.share = share;

  self.comments = comments;

  self.addComment = function() {
    var comment = Comment(self.newComment);

    commentService.addComment(comment, self.routeParams.shareid).then(function (data) {
      self.comments.push(data);
      var url = '/shares/' + self.routeParams.shareid + '/comments';
      $location.path(url);
    });
  }

}])
