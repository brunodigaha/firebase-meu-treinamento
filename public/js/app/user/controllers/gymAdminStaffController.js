var fs = require('fs');
module.exports = function($scope,$timeout,fbUtil,$mdDialog) {
	$scope.newStaffDialog = function(ev) {
		$mdDialog.show({
			controller: 'staffAdminDialogController',
			// scope: $scope,
			// preserveScope: true,
			locals: null,
			// bindToController: true,
			template: fs.readFileSync(__dirname + '/../templates/staffAdminDialogTemplate.html'),
			parent: angular.element(document.body),
			targetEvent: ev,
		})
		.then(function(answer) {
			// $scope.updateGym();
		}, function() {
			// if (Object.keys(changeList).length !== 0) {
			// 	$scope.gym = gymBackup;
			// 	gymBackup = {};
			// }
		});
	};
	$scope.editStaffDialog = function(ev,staff) {
		var staff2 = {
			name: 'Brun',
			surname: '',
			email: '',
			birthday: '',
			phone:'',
			permission: ''
		};
		$mdDialog.show({
			controller: 'staffAdminDialogController',
			// scope: $scope,
			// preserveScope: true,
			locals: staff2,
			// bindToController: true,
			template: fs.readFileSync(__dirname + '/../templates/staffAdminDialogTemplate.html'),
			parent: angular.element(document.body),
			targetEvent: ev,
		})
		.then(function(answer) {
			// $scope.updateGym();
		}, function() {
			// if (Object.keys(changeList).length !== 0) {
			// 	$scope.gym = gymBackup;
			// 	gymBackup = {};
			// }
		});
	};
	$scope.lista = [1,2,3];
	$scope.lista = [1,2,3];
};
