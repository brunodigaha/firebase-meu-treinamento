var fs = require('fs');
module.exports = function($scope,$timeout,fbUtil,$mdDialog) {
	$scope.ownerDialog = function(ev) {
		$mdDialog.show({
			controller: 'ownerAdminDialogController',
			scope: $scope,
			preserveScope: true,
			template: fs.readFileSync(__dirname + '/../templates/ownerAdminDialogTemplate.html'),
			parent: angular.element(document.body),
			targetEvent: ev,
		})
		.then(function(answer) {
			$scope.updateGym();
		}, function() {
			if (Object.keys(changeList).length !== 0) {
				$scope.gym = gymBackup;
				gymBackup = {};
			}
		});
	};
	$scope.lista = [1,2,3];
};
