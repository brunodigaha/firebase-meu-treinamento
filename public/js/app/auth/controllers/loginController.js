module.exports = function ($scope,$timeout,$location, authModelService,$firebaseArray,FBURL) {
	$scope.email = null;
	$scope.password = null;

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
		if ($scope.email && $scope.password){
			$scope.loading = true;
			authModelService.$authWithPassword({ email: $scope.email, password: $scope.password }, {rememberMe: true})
			.then(function(/* user */) {
				$location.path('/user/12/training-history');
			}, function(err) {
				$scope.err = errMessage(err);
			});
		}
	};
};
