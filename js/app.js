angular.module('MonkeySite', ['ngRoute', 'RouteControllers','AlbumDirective']);

angular.module('MonkeySite').config(function($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);

	$routeProvider.when('/',{
		templateUrl: 'monkey-site/templates/home.html',
		controller: 'HomeController'
	})
	.when('monkey-site/about',{
		templateUrl: 'monkey-site/templates/about.html',
		controller: 'AboutController'
	})
	.when('/gigs', {
		templateUrl: 'monkey-site/templates/gigs.html',
		controller: 'GigsController'
	})
	.when('monkey-site/media', {
		templateUrl: 'monkey-site/templates/media.html',
		controller: 'MediaController'
	})
	.when('monkey-site/contact', {
		templateUrl: 'monkey-site/templates/contact.html',
		controller: 'ContactController'
	});
});