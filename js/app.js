angular.module('MonkeySite', ['ngRoute', 'RouteControllers','AlbumDirective']);

angular.module('MonkeySite').config(function($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);

	$routeProvider.when('/',{
		templateUrl: 'monkey-site/templates/home.html',
		controller: 'HomeController'
	})
	.when('/about',{
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})
	.when('/gigs', {
		templateUrl: 'templates/gigs.html',
		controller: 'GigsController'
	})
	.when('/media', {
		templateUrl: 'templates/media.html',
		controller: 'MediaController'
	})
	.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	});
});