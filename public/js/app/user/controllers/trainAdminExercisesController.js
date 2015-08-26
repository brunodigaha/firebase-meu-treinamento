module.exports = function($scope,FBURL, $window, $firebaseArray) {
	// $scope.exercicios=[1,2,3,4];
	$scope.newGroup = {
		name: ''
	};
	var ref = new $window.Firebase(FBURL);
	var groups = ref.child("gym");
	$scope.groups  = $firebaseArray(groups);
	$scope.addGroup = function(){
		if ($scope.newGroup.name) {
			$scope.groups.$add({
				group: $scope.newGroup
			});
			$scope.newGroup.name = '';
		}
	};
	$scope.$on('removeGroup', function(event,group){
		$scope.groups.$remove(group).then(function(ref) {
			console.log("removido");
		});
	 });
	$scope.addExercise = function(group,exercise){
		if ($scope.newGroup.exercises) {
			$scope.groups.group.$add({
				group: $scope.newGroup
			});
			$scope.newGroup.name = '';
		}
	};
};
