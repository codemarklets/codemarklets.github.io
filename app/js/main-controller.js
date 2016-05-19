var angular = require('angular');
require('./utilities.js');
//This file generate at the time of runtime
require('./bookmarklets-merge.js');
angular.module('codemarklets')
.controller('mainController', ['$scope', 'utilities', 'bookmarklets', function($scope, $utilities, $bookmarklets) {
	var items = $bookmarklets.getItems();
	$scope.sections = $utilities.buildBookletsCategories(items);
}]);