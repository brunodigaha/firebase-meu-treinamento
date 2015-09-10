var fs = require('fs');
module.exports = function($scope,$timeout,fbUtil,$mdDialog) {
	$scope.staffDialog = function(ev) {
		$mdDialog.show({
			controller: 'membersAdminDialogController',
			// scope: $scope,
			// preserveScope: true,
			locals: {bruno:"Alexandre"},
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
};
