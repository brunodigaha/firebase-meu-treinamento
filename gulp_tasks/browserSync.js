//Task BrowserSync
module.exports = function (gulp,plugins){
	return function() {
	    plugins.browserSync.init(null, {
			server: "./dist",
			port: 8000,
	        notify: true
	    });
	};
};