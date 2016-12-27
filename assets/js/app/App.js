angular.module('HomeApp', ['ajoslin.promise-tracker', 'ngCookies'])
.constant('CONFIG', {
	'APP_URL': 'https://public.aerialspac.es'
})
.run(['$rootScope', '$window', 'promiseTracker', '$timeout',
		function($rootScope, $window, promiseTracker, $timeout) {
			var tracker = promiseTracker({
				minDuration:500,
				maxDuration:30000
			});
			$window.tracker = tracker;
			var deregisterFunction = $rootScope.$watch(tracker.active, function (isActive) {
				if (isActive) {
					$('#transparentMask').show();
					$('#loadingAnimation').show();
				}
				else {
					$('#loadingAnimation').hide();
					$('#transparentMask').hide();
				}
			});
			$rootScope.$on('$destroy', deregisterFunction);
			$timeout(function() {
				$('#loadingAnimation').hide();
				$('#transparentMask').hide();
			});
		}]);

