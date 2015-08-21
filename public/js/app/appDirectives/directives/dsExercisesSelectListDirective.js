var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsExercisesSelectListTemplateDirective.html'),
		// transclude:true,
		// scope: {
		// 	exercicios: "="
		// },
		controller: function($scope,$element,$attrs){
			// console.log($scope.exercicios);
			var exercisesItem = [];
			this.registerExerciseItem = function(exercise){
				exercisesItem.push(exercise);
			};
			this.close_all = function (){
				exercisesItem.forEach(function(exercise){
					exercise.isOpened = false;
				});
			};
			$scope.lista = [1,2,4,3,6];
		}
	};
};
