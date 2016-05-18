var ITEMS = [];

var angular = require('angular');
angular.module('codemarklets')
.service('bookmarklets', [function() {
	this.getItems = function() {
		return angular.copy(ITEMS);
	}
}]);
