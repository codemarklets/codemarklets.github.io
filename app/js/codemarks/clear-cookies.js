//Clear Cookies
(function() {

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
	'tags': "cookies",
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

})();