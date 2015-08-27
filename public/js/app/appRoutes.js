var fs = require('fs');

module.exports = function ($stateProvider,$compileProvider,$animateProvider,$locationProvider,$urlRouterProvider,$breadcrumbProvider,ChartJsProvider, $mdThemingProvider) {
	$locationProvider.html5Mode(false);
	$urlRouterProvider.otherwise('/user/12/training-history');
	// $urlRouterProvider.when('/home', '/home/index');
	$stateProvider

		.state('core',require('./core/coreRoutes.js').core.core) 

		.state('core.user.edit',require('./core/coreRoutes.js').core.edit) 


		.state('login',angular.extend(
				{url:'/login'},require('./auth/authRoutes.js').auth.login))


		.state('core.user',angular.extend(
				{url:'/user/{userId:int}'},require('./user/userRoutes.js').user.user))

		.state('core.user.planTraining',angular.extend(
				{url:'/plan-training'},require('./user/userRoutes.js').user.planTraining))

		.state('core.user.schedule',angular.extend(
				{url:'/schedule'},require('./user/userRoutes.js').user.schedule))

		.state('administration',angular.extend(
				{url:'/administration'},require('./user/userRoutes.js').user.administration))

		.state('administration.adminBill',angular.extend(
				{url:'/bill'},require('./user/userRoutes.js').user.billAdmin))

		.state('administration.adminGym',angular.extend(
				{url:'/gym'},require('./user/userRoutes.js').user.gymAdmin))

		.state('administration.adminGym.adminGymOwner',angular.extend(
				{url:'/owner'},require('./user/userRoutes.js').user.gymAdminOwner))

		.state('administration.adminGym.adminGymStaff',angular.extend(
				{url:'/staff'},require('./user/userRoutes.js').user.gymAdminStaff))

		.state('administration.adminGym.adminGymMembers',angular.extend(
				{url:'/members'},require('./user/userRoutes.js').user.gymAdminMembers))

		.state('administration.adminTrain',angular.extend(
				{url:'/training'},require('./user/userRoutes.js').user.trainAdmin))

		.state('administration.adminTrain.adminTrainExercises',angular.extend(
				{url:'/exercises'},require('./user/userRoutes.js').user.trainAdminExercises))

		.state('administration.adminTrain.adminTrainMethod',angular.extend(
				{url:'/training-method'},require('./user/userRoutes.js').user.trainAdminMethod))


		.state('core.user.plans',angular.extend(
				{url:'/plans'},require('./train/trainRoutes.js').train.plans))

		.state('core.user.listTraining',angular.extend(
				{url:'/list-training'},require('./train/trainRoutes.js').train.listTraining))

		.state('core.user.listTraining.training',angular.extend(
				{url:'/{trainId:int}'},require('./train/trainRoutes.js').train.training))

		.state('core.user.edit.addtraining',angular.extend(
				{url:'/training/add-training'},require('./train/trainRoutes.js').train.addtraining))

		.state('core.user.edit.addPlan',angular.extend(
				{url:'/add-plan'},require('./train/trainRoutes.js').train.addPlan))

		.state('core.user.trainingHistory',angular.extend(
				{url:'/training-history'},require('./train/trainRoutes.js').train.trainingHistory))

		.state('core.user.collectionTraining',angular.extend(
				{url:'/collection-training'},require('./train/trainRoutes.js').train.collectionTraining));



   $mdThemingProvider.theme('default')
    .primaryPalette('blue');
   //  .accentPalette('orange')
   //  .warnPalette('red')
    // .backgroundPalette('blue');
   $mdThemingProvider.theme('grey')
    .primaryPalette('blue-grey');

	// $breadcrumbProvider.setOptions({
	// 	template : '<p> Bruno ng-repeat="step in steps | limitTo:-1"</p> <span> {{ng-bind-html="step.ncyBreadcrumbLabel"}} </span>'
	// });
	
	$animateProvider.classNameFilter(/angular-animate/);

	// User em modo production para ganho de performance
	// $compileProvider.debugInfoEnabled(false);

    ChartJsProvider.setOptions({
      colours: ['#2196F3', '#BBDEFB'],
       // animation: false
    });	
};
