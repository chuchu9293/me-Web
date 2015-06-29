"use strict";
angular.module('gaoKaoApp', []);

angular
		.module('gaoKaoApp')
		.controller(
				"appCtrl",
				function($scope, $http) {
					//type为Science表示理科，Arts表示文科
					//[from,to]表示名次区间
					$scope.getTable = function(type,from,to) {
						$http
								.get(
								"http://me.likeyichu.com/webService/gaoKaoScore/"+type+"?from="+from+"&to="+to)
								//"http://localhost:8080/webService/gaoKaoScore/science?from=1&to=200")
								.success(function(response) {
									$scope.gaoKaoScoreList=response;
								});
					}//$scope.getScience1
					
					$scope.getTable("arts",1,200);
					$scope.fuzzyQuery=function(name){
						$http
						.get(
						"http://me.likeyichu.com/webService/gaoKaoScore/"+name)
						.success(function(response) {
							if(response.length==0)
								response[0]={no:"无结果"};
							$scope.gaoKaoScoreList=response;
						});
					}
				}

		);