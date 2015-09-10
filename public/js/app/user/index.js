module.exports = angular.module('user',[])

		.factory('exercisePatternModel', require('./services/exercisePatternModel.js'))

		.controller('planController', require('./controllers/planController.js'))
		.controller('trainAdminExercisesController', require('./controllers/trainAdminExercisesController.js'))
		.controller('gymAdminStaffController', require('./controllers/gymAdminStaffController.js'))
		.controller('staffAdminDialogController', require('./controllers/staffAdminDialogController.js'))
		.controller('gymAdminMembersController', require('./controllers/gymAdminMembersController.js'))
		.controller('membersAdminDialogController', require('./controllers/membersAdminDialogController.js'))
		.controller('gymAdminOwnerController', require('./controllers/gymAdminOwnerController.js'))
		.controller('ownerAdminDialogController', require('./controllers/ownerAdminDialogController.js'))
		.controller('scheduleController', require('./controllers/scheduleController.js'));
		// .factory('userModel', require('./services/userModel.js'))
		// .factory('RestangularCustom', require('./services/restangularCustom.js'));
