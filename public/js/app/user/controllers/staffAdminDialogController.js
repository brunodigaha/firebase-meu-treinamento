module.exports = function($scope,bruno,$mdDialog) {
	// console.log(gymBackup);
	// $scope.save = function() {
	// 	$mdDialog.hide();
	// };
	console.log(bruno);
	console.log($scope.lista);
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.save = function(answer) {
		$mdDialog.hide(answer);
	};
};
