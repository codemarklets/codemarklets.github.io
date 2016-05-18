var angular = require('angular');
require('./utilities.js');
require('./bookmarklets.js');
angular.module('codemarklets')
.controller('mainController', ['$scope', 'utilities', 'bookmarklets', function($scope, $utilities, $bookmarklets) {
	var items = $bookmarklets.getItems();
	$scope.sections = $utilities.buildBookletsCategories(items);
}]);