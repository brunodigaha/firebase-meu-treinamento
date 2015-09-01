module.exports = function($scope,FBURL, $window, $firebaseArray,exercisePatternModel) {
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
	// $scope.$on('removeExerc', function(event,exerc){
	// 	$scope.groups.$remove(group).then(function(ref) {
	// 		console.log("removido");
	// 	});
	//  });
	$scope.$on('addExercise', function(event,params){
		var ref = new $window.Firebase(FBURL);
		var group_ref = ref.child("gym/"+params[0].$id+"/exercises");
		group_ref.push(params[1],function(error) {
			 if(error){
				 console.log("erro ao salvar exercicio"+ error);
			 }
		 });
		// group.exercises.push('inserir');
		// $scope.groups.$save(group).then( function(ref){
		// 	console.log("salvou");
		// });
	});

};
