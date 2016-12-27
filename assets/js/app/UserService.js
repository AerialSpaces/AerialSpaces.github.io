angular.module('HomeApp').
factory('UserService', ['$http', '$q', 'RequestInterceptor', function($http, $q, requestInterceptor) {
	    return {
			canCreateUser: function(userDetails) {
	    		var deferred = $q.defer();
	    		requestInterceptor.send({method: 'POST'
					, url: 'api/user/canCreateUser'
					, params: userDetails }, true)
				.then(function(response) {
					if(response.status == 'failure') {
						deferred.reject();
						return;
					}
	    			deferred.resolve();
	    		})
	    		return deferred.promise;
			},
			registerUser: function(userDetails) {
	    		var deferred = $q.defer();
	    		requestInterceptor.send({method: 'POST'
					, url: 'registerUser'
					, params: userDetails
				}, false)
				.then(function(response) {
					if(response.status == 'failure') {
						deferred.reject();
						return;
					}
	    			deferred.resolve(response.data);
	    		}, function(error) {
					deferred.reject(error)
				})
	    		return deferred.promise;
			},
			registerSpacehub: function(userDetails) {
	    		var deferred = $q.defer();
	    		requestInterceptor.send({method: 'POST'
					, url: 'registerSpacehub'
					, params: userDetails
				}, false)
				.then(function(response) {
					if(response.status == 'failure') {
						deferred.reject();
						return;
					}
	    			deferred.resolve(response.data);
	    		}, function(error) {
					deferred.reject(error)
				})
	    		return deferred.promise;
			}
		}
	}
]);
