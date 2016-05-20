var angular = require('angular');
angular.module('codemarklets')
.directive("custBookmarklet", function() {
	//Binding href value
	function link( $scope, elem, attr) {
		elem.attr("href", $scope.$eval(attr.custBookmarklet));
	}
	// Return the directive configuration.
	return({
		link: link,
		restrict: "A"
	});
});