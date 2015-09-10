module.exports = function($scope,locals,$mdDialog) {

	var changeList = {};

	$scope.member = {
			name: '',
			surname: '',
			email: '',
			image: '',
			birthday: '',
			phone:'',
	};

	$scope.mode = "Inserção";

	var init = function (){
		if (locals !== null) {
			$scope.mode = "Edição";
			$scope.member = locals;
		}
	};
	$scope.change = function(key) {
		if ($scope.mode === "Edição") {
			changeList[key] = $scope.member[key];
			console.log(changeList);
		}
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.save = function(answer) {
		$mdDialog.hide(answer);
	};

	init();
};
