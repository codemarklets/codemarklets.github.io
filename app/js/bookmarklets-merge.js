var ITEMS = [];

var angular = require('angular');
angular.module('codemarklets')
.service('bookmarklets', [function() {
	this.getItems = function() {
		return angular.copy(ITEMS);
	}
}]);

(function() {
	//Counting The Number Of Watchers In AngularJS
	//http://www.bennadel.com/blog/2698-counting-the-number-of-watchers-in-angularjs.htm
	function getWatchCount() {
		var total = 0;
		// AngularJS denotes new scopes in the HTML markup by appending the
		// class "ng-scope" to appropriate elements. As such, rather than
		// attempting to navigate the hierarchical Scope tree, we can simply
		// query the DOM for the individual scopes. Then, we can pluck the
		// watcher-count from each scope.
		// --
		// NOTE: Ordinarily, it would be a HUGE SIN for an AngularJS service
		// to access the DOM (Document Object Model). But, in this case,
		// we're not really building a true AngularJS service, so we can
		// break the rules a bit.
		angular.element( ".ng-scope" ).each(
			function ngScopeIterator() {
				// Get the scope associated with this element node.
				var scope = $( this ).scope();
				// The $$watchers value starts out as NULL.
				total += scope.$$watchers
					? scope.$$watchers.length
					: 0
				;
			}
		);
		return( total );
	}
	// For convenience, let's serialize the above method and convert it to
	// a bookmarklet that can easily be run on ANY AngularJS page.
	getWatchCount.bookmarklet = (
		"javascript:alert('Watchers:'+(" +
		getWatchCount.toString()
			.replace( /\/\/.*/g, " " )
			.replace( /\s+/g, " " ) +
		")());void(0);"
	);
}());
(function() {

//Clear Cookies
function clearCookies(){
    var cookies = document.cookie.split(";");
	var len = cookies.length;
    for(var i = 0; i < len; i++){
		var cookie = cookies[i];
        var e = cookie.indexOf("=");
        var n = (e > -1)?cookie.substr(0,e):cookie;
        document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
	alert("Cookies Cleared");
}

var codemark = {
	'tags': "cookies, js",
	'title': "Clear Cookies",
	'description': "It will clear the cookes for current document",
	'code': clearCookies.toString(),
	'bookmarklet': clearCookies.bookmarkLet(),
	'link':'',
	'references': [
		'http://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154'
	]
}

ITEMS.push(codemark);

}());