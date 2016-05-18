var angular = require('angular');
require('angular-ui-router');
require('./main-controller.js');
angular.module('codemarks')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to
	$urlRouterProvider.otherwise("");
	
	// Now set up the states
	$stateProvider
		.state('main', {
			url: "",
			controller: 'mainController',
			templateUrl: "./dist/templates/main-content.html"
		});
}]);