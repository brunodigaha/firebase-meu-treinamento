//Task BrowserSync
module.exports = function (gulp,plugins){
	return function() {
	    plugins.browserSync.init(['dist/css/styles.css','dist/index.html'], {
			server: "./dist",
			port: 8000,
	        notify: true
	    });
	};
};