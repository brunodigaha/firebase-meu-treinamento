module.exports = function ($scope,$timeout,$location, authModelService,$firebaseArray,FBURL) {
	$scope.email = null;
	$scope.password = null;
	$scope.error = null;

	// var URL = new Firebase(FBURL);
	// $scope.users  = $firebaseArray(URL);
	// $scope.addUser = function(){
	// 	$scope.users.$add({
	// 		nome: $scope.newUserName
	// 	});
	// };
	// $scope.removeUser = function(user){
	// 	$scope.users.$remove(user);
	// };

	// syncObject.$bindTo($scope,"data");
	// $scope.data = $firebaseObject(URL);
	// $scope.items=$firebase(newFirebase(URL+'/items'));
	// $scope.data.$add({nome:"Bruno Alexandre"});

	$scope.login = function () {
		$scope.error = null;
		if ($scope.email && $scope.password){
			$scope.loading = true;
			authModelService.$authWithPassword({ email: $scope.email, password: $scope.password }, {rememberMe: true})
			.then(function(/* user */) {
				$location.path('/user/12/training-history');
			}, function(error) {
				$scope.loading = false;
				switch (error.code) {
					case "INVALID_EMAIL":
						$scope.error ="Email Inválido";
					break;
					case "INVALID_PASSWORD":
						$scope.error ="Senha Inválida";
						$scope.password = null;
					break;
					case "INVALID_USER":
						$scope.error ="Conta Inexistente";
					break;
					default:
						$scope.error ="Erro ao realizar o Login " + error;
				} 
			});
		}
	};
};
