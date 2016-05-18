var angular = require('angular');
angular.module('codemarks')
.service('utilities', [function() {
	this.convertFunctionToBookmarkString = function(funName) {
		return funName.toString()
				.replace(/\/\/.*/g, " ")
				.replace(/\s+/g, " ");
	}
}])