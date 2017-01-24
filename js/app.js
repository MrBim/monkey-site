angular.module('MonkeySite', ['ngRoute', 'RouteControllers']);

angular.module('MonkeySite').config(function($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);

	$routeProvider.when('/',{
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/about',{
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	});
});