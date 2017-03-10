(function() {
	function addScritFile() {
        var script = document.createElement('script');
        script.src = 'http://codemarklets.github.io/cnbc-auto-play.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
	}
	
	var codemark = {
		'tags': "Script",
		'title': "CNBC Auto Play",
		'description': "Adding script file to cnbc webpage to autoplay when it is stopped",
		'code': addScritFile.toString(),
		'bookmarklet': addScritFile.bookmarkLet(),
		'link':''
	}

	ITEMS.push(codemark);
}());