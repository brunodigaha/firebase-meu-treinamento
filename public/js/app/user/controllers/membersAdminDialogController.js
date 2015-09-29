module.exports = function($scope,membersService,locals,$timeout,$mdDialog,UCURL) {

	var changeList = {};

	$scope.member = {
			name: '',
			surname: '',
			email: '',
			image: null,
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
		if (info.cdnUrlModifiers) {
			$scope.member.image = info.uuid+'/'+info.cdnUrlModifiers;
			changeList.image = info.uuid+'/'+info.cdnUrlModifiers;
		}else{
			$scope.member.image = info.uuid+'/';
			changeList.image = info.uuid+'/';
		}
		$scope.$digest();
	};
	$scope.change = function(key) {
		if ($scope.mode === "Edição" && $scope.member[key]) {
			if (key === 'name' || key === 'surname'){
				changeList.full_name = $scope.member.name+' '+$scope.member.surname;
			}
			changeList[key] = $scope.member[key];
		}
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.save = function(member) {
		if ($scope.mode == "Inserção"){
			// $scope.loading = true;
			membersService.addMember(angular.copy(member))
				.then(function(datas){
					$mdDialog.hide(member.name);
					// $timeout(function(){
					// $mdDialog.hide(answer);
					// $scope.loading = false;
					// },1500);
				}, function(error){
					console.log(error);
					// $mdDialog.hide(member);
				});
		}else {
			if (_.isEmpty(changeList)){
				$mdDialog.hide(null);
			}else {
				membersService.updateMember(member.$id,changeList)
					.then(function(data){
						$mdDialog.hide(member.name);
					},function(error){
						console.log(error);
					});
			}
		}
	};

	init();
};
