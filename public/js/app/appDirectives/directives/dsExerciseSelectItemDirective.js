var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsExerciseSelectItemTemplateDirective.html'),
		// transclude:true,
		scope: {
			group: "="
		},
		controller: function($scope){

			$scope.newExercise = {
				name : ""
			};
			this.get = function(){
				return $scope.newExercise.name;
			};
			
			// $scope.add = function(group) {
			// 	console.log("passou", $scope.newExercise.name);
			// 	$scope.$emit('addExercise',[group,$scope.newExercise.name]);
			// };

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
			//remove group
			scope.remove = function(group) {
				ctrls[1].remove(group);
			};
			scope.add = function(group) {
				ctrls[1].add(group,ctrls[0].get());
				scope.newExercise = {
					name : ""
				};
			};
			scope.remove_exer = function(exer) {
				console.log(exer);
				// ctrls[1].remove_exer(group,ctrls[0].get());
			};
			// scope.remove = function(exercicio){
			// 	scope.$emit('remove_exercise',exercicio);
			// };
		}
	};
};
