var fs = require('fs');
module.exports = function($scope,$timeout,fbUtil,$mdDialog) {
	$scope.newMemberDialog = function(ev) {
		$mdDialog.show({
			controller: 'membersAdminDialogController',
			// scope: $scope,
			// preserveScope: true,
			locals: null,
			// bindToController: true,
			template: fs.readFileSync(__dirname + '/../templates/membersAdminDialogTemplate.html'),
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
	$scope.editMemberDialog = function(ev,member) {
		var member2 = {
				name: 'Membro',
				surname: '',
				email: '',
				image: '',
				birthday: '',
				phone:'',
		};
		$mdDialog.show({
			controller: 'membersAdminDialogController',
			// scope: $scope,
			// preserveScope: true,
			locals: member2,
			// bindToController: true,
			template: fs.readFileSync(__dirname + '/../templates/membersAdminDialogTemplate.html'),
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
