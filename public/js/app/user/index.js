module.exports = angular.module('user',[])
		.controller('planController', require('./controllers/planController.js'))
		.controller('trainAdminExercisesController', require('./controllers/trainAdminExercisesController.js'))
		.controller('scheduleController', require('./controllers/scheduleController.js'));
		// .factory('userModel', require('./services/userModel.js'))
		// .factory('RestangularCustom', require('./services/restangularCustom.js'));
