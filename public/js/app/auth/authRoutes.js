var fs = require('fs');
module.exports = {
	auth : {
		login : {
			authenticate: false,
			views: {
				'wrap@': {
					resolve: {
						init: function(authModelService, $state,$stateParams){
							// console.log("token",authModelService.token,"authenticated", authModelService.authenticated,$state.current );
							// console.log("esatteParamssssss",$stateParams);
							if (authModelService.$getAuth()) {
								// event.preventDefault(); 
								$state.go('core.user.planTraining', {userId:12});
								console.log('já esta logado');
							}

							return {};
						}
					},
					controller: 'loginController',
					template: fs.readFileSync(__dirname + '/templates/loginWrap.html')  
				},
			}
		}
	}
};


