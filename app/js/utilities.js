var angular = require('angular');
angular.module('codemarklets')
.service('utilities', [function() {
	
	var utilities = {};
	
	utilities.buildBookletsCategories = function(list) {
		return utilities.buildCategories(list, 'tags', ',');
	}
	utilities.buildCategories = function(list, key, splitter) {
		var categories = {};
		list = list || [];
		list.forEach(function(item) {
			var tags = item[key] || '';
			tags = tags.split(splitter);
			tags.forEach(function(tag) {
				if(!categories[tag]) {
					categories[tag] = [];
				}
				categories[tag].push(item);
			});
		});
		
		return categories;
	}
	
	return utilities;
}])