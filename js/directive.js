angular.module('AlbumDirective',[]).directive('albums', function() {
  return {
    restrict: 'E',    // A -> attribute
    templateUrl: 'monkey-site/templates/directives/albums.html'
  };
});  