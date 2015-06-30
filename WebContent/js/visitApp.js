"use strict";
angular.module('visitApp',[]);
angular.module('visitApp').controller(
		"visitAppCtrl",
		function($scope, $http) {
			$scope.getFun = function() {
				$http.get("http://me.likeyichu.com/webService/ipVisit/get")
						.success(function(response) {
							$scope.ipList = response;
						});
			}
			
			$scope.getFun();
		}

);