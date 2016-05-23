(function() {

	//List of Cookies
	function cookiesList(){
		var cookies = document.cookie.split(";");
		var len = cookies.length;
		var str = (len && cookies[0] != "") ? "Following cookies are using:" : "No cookies are using";
		for(var i = 0; i < len; i++){
			var cookie = cookies[i];
			str += ("\n" + cookie.replace('=', ' = '));
		}
		alert(str);
	}

	var cookiesListCodemark = {
		'tags': "cookies",
		'title': "List of Cookies",
		'description': "It display all the cookies using in current document",
		'code': cookiesList.toString(),
		'bookmarklet': cookiesList.bookmarkLet(),
		'link':'',
		'references': []
	}
	
	ITEMS.push(cookiesListCodemark);

}());