module.exports = function($scope,membersService,locals,$timeout,$mdDialog,UCURL) {

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
	$scope.loading = false;

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
	$scope.save = function(member) {
		// $scope.loading = true;
		membersService.addMember(angular.copy($scope.member))
			.then(function(datas){
				$mdDialog.hide(member);
				// $timeout(function(){
				// $mdDialog.hide(answer);
				// $scope.loading = false;
				// },1500);
			}, function(error){
				console.log(error);
			});
	};

	init();
};
