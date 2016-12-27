function Utils() {
}

Utils.getRelativeUrl = function(path) {
	//var url = window.location.pathname;
	//if ((null == url) || (0 == url.length)) {
		//return '/' + path;
	//}
	//var urlPath = url.match(/^\/[^\/]*\//);
	//if ((null == urlPath) || (0 == urlPath.length)) {
		//return '/' + path;
	//}
	//else {
		//return urlPath + path;
	//}
	return '/' + path;
};

Date.prototype.addHours= function(h){
	this.setHours(this.getHours()+h);
	return this;
}
