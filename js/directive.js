angular.module('AlbumDirective',[]).directive('albums', function() {
  return {
    restrict: 'E',    // A -> attribute
    templateUrl: 'templates/directives/albums.html'
  };
});  