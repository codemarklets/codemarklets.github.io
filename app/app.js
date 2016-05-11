var angular = require('angular');
var G_T = true;
var G_F = false;
angular.module('time-quote', [])
.service('dataService', [function() {
	
	this.getQuote = function() {
		return localStorage.quote || '';
	}
	
	this.setQuote = function(quote) {
		if(quote) {
			localStorage.quote = quote;
			return localStorage.quote;
		}
		return G_F;
	}
	
}])
.controller('appController', ["$scope", "$timeout", "dataService", function($scope, $timeout, $data) {
	// Build the data object
	$scope.data = {
		date: new Date(),
		quote: $data.getQuote(),
		newQuote: ''
	};
	
	$scope.edit = G_F;
	
	$scope.editQuote = function(e) {
		$scope.data.newQuote = $scope.data.quote;
		$scope.edit = G_T;
	}
	
	$scope.updateQuote = function(e) {
		if($scope.data.newQuote) {
			var quote = $data.setQuote($scope.data.newQuote);
			if(quote) {
				$scope.data.quote = quote;
				$scope.edit = G_F;
			}
		}
	}
	
	// Update Time
	var updateTime = function() {
		$scope.data.date = new Date();
		$timeout(updateTime, 1000);
	}
 	// Kick off the update function
	updateTime();
}]);