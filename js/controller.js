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
		
		function wait(ms){
		   var start = new Date().getTime();
		   var end = start;
		   while(end < start + ms) {
		     end = new Date().getTime();
		  }
		}
        
        $scope.submitForm = function() {
            if ($scope.contactForm.$valid) {
                $scope.contactUser.name = $scope.contact.name;
                $scope.contactUser.email = $scope.contact.email;
                $scope.contactUser.message = $scope.contact.message;
          		
				// bit to fake the backend stuff with the form
	          		// delay for some time 
					wait(2000);
	          		//user is given some kind of feedback
	          		// clear form fields 
	 				$scope.contact.name = null;
					$scope.contact.email = null;
	 				$scope.contact.message = null;
            }
        }
	});