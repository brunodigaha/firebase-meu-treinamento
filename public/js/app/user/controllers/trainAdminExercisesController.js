module.exports = function($scope,FBURL, $window, $firebaseArray,exercisePatternModel) {

	$scope.bindModel = exercisePatternModel.bindModel;

	$scope.addGroup = function(){
		exercisePatternModel.addGroup();
	};

};
