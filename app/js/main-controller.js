var angular = require('angular');
require('./utilities.js');
angular.module('codemarks')
.controller('mainController', ['$scope', 'utilities', function($scope, $utilities) {
	$scope.sections = [{
		name: 'HTML',
		items : [{
			name: 'codemark',
			callback: "alert"
		}]
	}];
}]);