var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsExercisesSelectListTemplateDirective.html'),
		// transclude:true,
		scope: {
			groups: "="
		},
		controller: function($scope,$log,$element,$attrs){
			$log.log($scope.exercises);
			var exercisesItem = [];
			this.registerExerciseItem = function(exercise){
				exercisesItem.push(exercise);
			};
			this.close_all = function (){
				exercisesItem.forEach(function(exercise){
					exercise.isOpened = false;
				});
			};
			this.remove = function(group){
				 $scope.$emit('removeGroup', group);
			};
		}
	};
};
