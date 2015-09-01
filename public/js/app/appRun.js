module.exports = function ($rootScope,UCURL,$location,$state,$stateParams,authModelService,coreEventsService) {

	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
		// console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
		// console.log("fromSate",fromState);
		// console.log("tostate", toState);
		// console.log("toParam", toParams);
		// console.log("fromParam", fromParams);
		coreEventsService.close_all();
		if(toState.authenticate && !authModelService.$getAuth()){
			event.preventDefault();
			$state.go("login");
			console.log("tostate", toState);
		}
		// else if(toState.name == 'login' && authModelService.$getAuth()) {
		// 	event.preventDefault(); 
		// 	$state.go('core.user.planTraining', {userId:12});
		// }
		// if(toState.name == 'login' && authModelService.$getAuth()) {
		// 	event.preventDefault(); 
		// 	$state.go('core.user.home.planTraining', {userId:12});
		// }
	});
	$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
		event.preventDefault();
		if (error === "AUTH_REQUIRED") {
			$location.path("/login");
			// $state.go("login");
			console.log("Erro Autenticacao Firebase ---- StateChangeError");
		}else {
			console.log('$stateChangeError - fired when an error occurs during transition.');
			console.log(arguments);
		}
	});

	// event On Firebase auth
	authModelService.$onAuth(function(authData){
		if (authData === null){
			$location.path("/login"); 
			console.log("evento logout Firebase");
		}
	});

	// $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
	// 	console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
	// });

	// $rootScope.$on('$viewContentLoaded',function(event){
	// 	console.log('$viewContentLoaded - fired after dom rendered',event);
	// });

	$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
		console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
		console.log(unfoundState, fromState, fromParams);
	});
	$rootScope.UCURL = {
		url: UCURL
	};

	// $state.transitionTo($state.current, $stateParams, {
	// 	reload: true,
	// 	inherit: false,
	// 	notify: true
	// });
};
