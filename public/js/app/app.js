//other dependencies
require('modernizr');
require('angular');
//angular modules
angular
.module('app',[
	require('ui-router').name,
	require('angularBreadcrumb').name,
	require('angularSortableView').name,
	require('angularScroll').name,
	require('angularCookies').name,
	require('angularMessages').name,
	require('angularIcons').name,
	require('angularMaterial').name,
	require('angularFire').name,
	require('angularChart').name,
	require('angularHolderjs').name,
	require('angularUploadcare').name,
	require('angularTooltips').name,
	require('angularLoadingBar').name,
	require('./appDirectives').name,
	require('./auth').name,
	require('./core').name,
	require('./user').name,
	require('./train').name
])
//Firebase URL APP
.constant('FBURL', 'https://vitta.firebaseio.com')
//UploadCare URL to Images
.constant('UCURL', 'https://www.ucarecdn.com/')
.config(require('./appRoutes.js'))
.run(require('./appRun.js'));


