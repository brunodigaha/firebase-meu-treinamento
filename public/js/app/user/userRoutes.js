var fs = require('fs');
module.exports = {
	user : {

		user : {
			authenticate: true,
			abstract: true,
			// views: {
			// 	controller: function($stateParams) {
			// 		// expect($stateParams).toBe({userId: 12});
			// 	},
			// 	'content@core': {
			// 		template: fs.readFileSync(__dirname + '/templates/userContent.html')  
			// 	}
			// },
		},

		home : {
			authenticate: true,
			abstract: true,
			views: {
				// controller: function($stateParams) {
				// 	// expect($stateParams).toBe({userId: 12});
				// },
				'content@core': {
					template: fs.readFileSync(__dirname + '/templates/homeUserContent.html')  
				}
			},
		},

		administration : {
			authenticate: true,
			abstract: true,
			views: {
				'wrap': {
					// controller: function($stateParams) {
					// 	// expect($stateParams).toBe({userId: 12});
					// },
					template: fs.readFileSync(__dirname + '/templates/administrationUserWrap.html')  
				}
			},
		},

		billAdmin : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Administração'
			},
			views: {
				// controller: function($stateParams) {
				// 	// expect($stateParams).toBe({userId: 12});
				// },
				// 'admin-content-menu@administration': {
				// 	template: fs.readFileSync(__dirname + '/templates/homeUserContent.html')  
				// },
				// 'admin-content-menu"-content@administration': {
				// 	template: fs.readFileSync(__dirname + '/templates/billUserAdmin.html')  
				// }
				'content-admin@administration': {
					template: fs.readFileSync(__dirname + '/templates/billUserAdmin.html')  
				}
			},
		},

		gymAdmin : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Administração'
			},
			views: {
				// controller: function($stateParams) {
				// 	// expect($stateParams).toBe({userId: 12});
				// },
				'admin-content-menu@administration': {
					template: fs.readFileSync(__dirname + '/templates/gymMenuUserAdmin.html')  
				},
				'admin-content-menu-content@administration': {
					template: fs.readFileSync(__dirname + '/templates/gymContentUserAdmin.html')  
				}
			},
		},


		planTraining : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Painel Inicial'
			},
			views: {
				'home-content@core.user.home': {
					controller:'planController',
					template: fs.readFileSync(__dirname + '/templates/planUserHomeContent.html')  
				}
			},
		},

		schedule : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Agenda'
			},
			views: {
				'content@core': {
					controller:'scheduleController',
					template: fs.readFileSync(__dirname + '/templates/scheduleUserContent.html')  
				}
			},
		}
	}
};
