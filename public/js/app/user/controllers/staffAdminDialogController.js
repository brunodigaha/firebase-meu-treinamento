module.exports = function($scope,locals,$mdDialog) {

	var changeList = {};

	$scope.staff = {
			name: '',
			surname: '',
			email: '',
			birthday: '',
			phone:'',
			permission: ''
	};

	$scope.mode = "Inserção";

	var init = function (){
		if (locals !== null) {
			$scope.mode = "Edição";
			$scope.staff = locals;
		}
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.save = function(answer) {
		$mdDialog.hide(answer);
	};
	$scope.change = function(key) {
		if ($scope.mode === "Edição") {
			changeList[key] = $scope.staff[key];
			console.log(changeList);
		}
	};

	init();
};
