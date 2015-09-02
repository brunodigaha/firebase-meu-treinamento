var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsExerciseSelectItemTemplateDirective.html'),
		scope: {
			group: "="
		},
		controller: function($scope,exercisePatternModel){

			$scope.bindModel = exercisePatternModel.bindModel;

			$scope.removeGroup = function(event,group){
				exercisePatternModel.removeGroup(event,group);
			};

			$scope.removeExercise = function(group,exercise){
				exercisePatternModel.removeExercise(group,exercise);
			};

			$scope.addExercise = function(group){
				exercisePatternModel.addExercise(group);
			};

		},
		require: ["^dsExerciseSelectItem","^dsExercisesSelectList"],
		link :function(scope, element,attrs,ctrls) {
			ctrls[1].registerExerciseItem(scope);
			scope.open_exerc= function () {
				ctrls[1].close_all();
				scope.isOpened = true;
			};
			scope.close_exerc= function () {
				scope.isOpened = false;
			};
		}
	};
};
