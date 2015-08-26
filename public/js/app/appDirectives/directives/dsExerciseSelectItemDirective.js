var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsExerciseSelectItemTemplateDirective.html'),
		// transclude:true,
		scope: {
			group: "="
		},
		require: "^dsExercisesSelectList",
		link :function(scope, element,attrs,ctrl) {
			ctrl.registerExerciseItem(scope);
			scope.open_exerc= function () {
				ctrl.close_all();
				scope.isOpened = true;
			};
			scope.close_exerc= function () {
				scope.isOpened = false;
			};
			scope.remove = function(group) {
				ctrl.remove(group);
			};
			// scope.remove = function(exercicio){
			// 	scope.$emit('remove_exercise',exercicio);
			// };
		}
	};
};
