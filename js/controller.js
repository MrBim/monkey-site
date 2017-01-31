angular.module('RouteControllers', [])

	.controller('HomeController', function($scope){
	})

	.controller('AboutController', function($scope){
	})

	.controller('GigsController', function($scope){
	})

	.controller('MediaController', function($scope){
	})

	.controller('ContactController', function($scope){
		$scope.contactUser = {};


		        $scope.submitForm = function() {
            if ($scope.contactForm.$valid) {
                $scope.contactUser.name = $scope.user.name;
                $scope.contactUser.email = $scope.user.email;
                $scope.contactUser.message = $scope.user.message;
          
 // do something to send this info as an email?
            }
        }
	});