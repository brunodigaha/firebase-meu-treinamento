var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsUserTemplateDirective.html'),
		transclude:true,
		// scope: {
		// },
		// controller: function($scope,$log,$element,$attrs,exercisePatternModel){
		// 	var exercisesItem = [];
		// 	this.registerExerciseItem = function(exercise){
		// 		exercisesItem.push(exercise);
		// 	};
		// 	this.close_all = function (){
		// 		exercisesItem.forEach(function(exercise){
		// 			exercise.isOpened = false;
		// 		});
		// 	};
		// 	$scope.bindModel = exercisePatternModel.bindModel;
		// }
	};
};
