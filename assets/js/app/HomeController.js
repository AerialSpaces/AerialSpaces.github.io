angular.module('HomeApp')
.controller('HomeController', [ '$scope' , 'CONFIG', 'UserService', '$cookies', function($scope, CONFIG, UserService, $cookies) {
	$scope.user={};

	$scope.saveUser = function() {
		UserService.registerUser($scope.user).then(function(data){
			$scope.user.id = data.user.id;
			$cookies.put("payedUserId", $scope.user.id, {expires: new Date().addHours(1), path: '/'})
		});
	}

	$scope.saveSpacehub = function() {
		UserService.registerSpacehub($scope.user).then(function(data){
			window.location.href = "https://aerialspac.es/registrationSuccess/";
		});
	}

	$scope.clearUser = function() {
		$scope.user = {};
	}

}]);
