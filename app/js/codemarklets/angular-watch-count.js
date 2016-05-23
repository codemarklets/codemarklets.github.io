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
		/*angular.element(".ng-scope")
			.each(function ngScopeIterator() {
				// Get the scope associated with this element node.
				var scope = $(this).scope();
				// The $$watchers value starts out as NULL.
				total += scope.$$watchers ? scope.$$watchers.length : 0
				;
			});*/
		
		var ngscopes = document.querySelectorAll(".ng-scope");
		for(var i=0, len = ngscopes.length; i < len; i++){
			var scope = angular.element(ngscopes[i]).scope();
			// The $$watchers value starts out as NULL.
			total += scope.$$watchers ? scope.$$watchers.length : 0;
		}
		
		alert(total + ((total == 1)?' Watch is':' Watchers are' + ' using in the application'));
	}
	
	var codemark = {
		'tags': "angular",
		'title': "Counting The Number Of Watchers In AngularJS App",
		'description': "It let you konw how many watchers are running currently",
		'code': getWatchCount.toString(),
		'bookmarklet': getWatchCount.bookmarkLet(),
		'link':'',
		'references': [
			'http://www.bennadel.com/blog/2698-counting-the-number-of-watchers-in-angularjs.htm'
		]
	}

	ITEMS.push(codemark);
}());