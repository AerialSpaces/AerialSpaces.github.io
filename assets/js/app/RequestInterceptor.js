angular.module('HomeApp').
	factory('RequestInterceptor', ['$http', '$q', '$timeout', '$window',
			function($http, $q, $timeout, $window) {
				return {
					send:function(params, isBackgroundRequest) {
						var deferred = $q.defer();

						$timeout(function() {
							var request = {
								method:params.method,
								url:params.url,
								timeout:30000
							};
							if (params.params) {
								request.params = params.params;
							}
							if (params.data) {
								request.data = params.data;
							}
							if (params.headers) {
								request.headers = params.headers;
							}
							if (isBackgroundRequest) {
								if (!request.headers) {
									request.headers = {};
								}
								request.headers['BACKGROUND_REQUEST'] = true;
							}
							else {
								request.tracker = $window.tracker;
							}

							$http(request).
								success(function(response, httpStatus) {
									if ('success' != response.status) {
										deferred.resolve({
											status:'failure',
											data: response.data,
											errors : response.errors
										});
										return;
									}
									var deferredResponse = {}
									try{
										deferredResponse = {
											status: response.status,
											data: JSON.parse(response.data)
										}
									} catch(e) {
										deferredResponse = {
											status: response.status,
											data: response.data
										}
									}
									deferred.resolve(deferredResponse);
								}).
							error(function(response, status) {
								deferred.reject({
								});
							});
						});
						return deferred.promise;
					}
				}
			}]);
