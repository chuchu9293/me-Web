"use strict";
angular.module('gaoKaoApp', []);

angular
		.module('gaoKaoApp')
		.controller(
				"appCtrl",
				function($scope, $http) {
					$scope.getScience1 = function() {
						$http
								.get(
										//"http://me.likeyichu.com/webService/gaoKaoScore/science?from=1&to=1")
								"http://localhost:8080/webService/gaoKaoScore/science?from=1&to=1")
								.success(function(response) {
									$scope.science1 = response;
									$scope.gaoKaoScoreList=$scope.science1;
								});
					}//$scope.getScience1
					
					$scope.getScience2 = function() {
						$http
								.get(
										"http://me.likeyichu.com/webService/gaoKaoScore/science?from=201&to=400")
								.success(function(response) {
									$scope.science2 = response;
								});
					}//$scope.getScience2
					
					$scope.getScience3 = function() {
						$http
								.get(
										"http://me.likeyichu.com/webService/gaoKaoScore/science?from=401&to=600")
								.success(function(response) {
									$scope.science3 = response;
								});
					}//$scope.getScience3
					
					$scope.getScience4 = function() {
						$http
								.get(
										"http://me.likeyichu.com/webService/gaoKaoScore/science?from=601&to=800")
								.success(function(response) {
									$scope.science4 = response;
								});
					}//$scope.getScience4
					
					$scope.getScience5 = function() {
						$http
								.get(
										"http://me.likeyichu.com/webService/gaoKaoScore/science?from=801&to=1000")
								.success(function(response) {
									$scope.science5 = response;
								});
					}//$scope.getScience5
					
				}

		);