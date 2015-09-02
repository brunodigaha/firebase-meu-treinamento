var fs = require('fs');
module.exports = function($scope,$mdDialog) {
	$scope.ownerDialog = function(ev) {
		$mdDialog.show({
			controller: 'ownerAdminDialogController',
			template: fs.readFileSync(__dirname + '/../templates/ownerAdminDialogTemplate.html'),
			parent: angular.element(document.body),
			targetEvent: ev,
		})
		.then(function(answer) {
			$scope.alert = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.alert = 'You cancelled the dialog.';
		});
	};

};
