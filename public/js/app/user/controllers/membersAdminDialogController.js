module.exports = function($scope,locals,$mdDialog,UCURL) {

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
	$scope.UCURL = UCURL;

	var init = function (){
		if (locals !== null) {
			$scope.mode = "Edição";
			$scope.member = locals;
		}
	};
	$scope.onUCUploadComplete = function (info){
		console.log(info);
		if (info.cdnUrlModifiers) {
			$scope.member.image = info.uuid+'/'+info.cdnUrlModifiers;
			changeList.image = info.uuid+'/'+info.cdnUrlModifiers;
		}else{
			$scope.member.image = info.uuid+'/';
			changeList.image = info.uuid+'/';
		}
		$scope.$digest();
		console.log($scope.member.image);
	};
	$scope.change = function(key) {
		if ($scope.mode === "Edição" && $scope.member[key]) {
			changeList[key] = $scope.member[key];
			console.log(changeList);
		}
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.save = function(answer) {
		console.log("teste");
		if (true === false) {
			$mdDialog.hide(answer);
		}
	};

	init();
};
