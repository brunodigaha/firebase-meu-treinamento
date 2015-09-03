module.exports = function($scope,$mdDialog) {
	// console.log(gymBackup);
	// $scope.save = function() {
	// 	$mdDialog.hide();
	// };
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.save = function(answer) {
		$mdDialog.hide(answer);
	};
};
