var angular = require('angular');
var router = require('angular-ui-router');
angular.module('codemarks')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /
	$urlRouterProvider.otherwise("");
	
	// Now set up the states
	$stateProvider
		.state('home', {
			url: "",
			templateUrl: "./dist/templates/main-content.html"
		});
}]);