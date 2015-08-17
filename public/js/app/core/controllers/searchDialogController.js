module.exports = function($scope,$mdToast,$mdDialog,FBURL,$window,$firebaseObject) {
	$scope.newUser = {
		image:null,
		name: null,
		surname: null,
		birthday:null,
		phone: null
	};
	$scope.onUCUploadComplete = function (info){
		console.log(info);
		if (info.cdnUrlModifiers) {
			$scope.newUser.image = info.uuid+'/'+info.cdnUrlModifiers;
		}else{
			$scope.newUser.image = info.uuid+'/';
		}
		$scope.$digest();
	};
	$scope.create_user = function () {
		if ($scope.birthday && $scope.newUser.surname && $scope.newUser.phone && $scope.newUser.name){
			$scope.newUser.birthday = $scope.birthday.getTime();
			var ref = new $window.Firebase(FBURL);
			var newUser = ref.child("users");
			newUser.push($scope.newUser,function(error)
				 {
					 if(error){
						 console.log("error com salvamento"+ error);
					 }else {
						 console.log("salvo com sucesso");
						 $mdDialog.hide();
						 $mdToast.show(
							 $mdToast.simple()
							 .content('Aluno Cadastrado com Sucesso!')
							 .position("top right")
							 .hideDelay(4000)
						 );
					 }
				 });
		}else{
			$scope.ishowRequiredError =true;
		}
	};
	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
};
