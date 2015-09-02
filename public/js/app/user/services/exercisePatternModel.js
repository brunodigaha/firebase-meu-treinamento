module.exports = function (fbUtil,$firebaseArray,FBURL) {

	var bindModel = {
		groupName: '',
		exerciseName: '',
		isLoaded: false
	};

	bindModel.groups = $firebaseArray(fbUtil.ref('gym'));

	bindModel.groups.$loaded().then(function(x) {
		console.log("carregou grupos");
		bindModel.isLoaded = true;
	});


	var addGroup = function() {
		if (bindModel.groupName) {
			bindModel.groups.$add({
				group: bindModel.groupName
			});
			bindModel.groupName = '';
		}
	};
	var removeGroup = function(group){
		bindModel.groups.$remove(group);
	};
	var addExercise = function(group) {
		if (bindModel.exerciseName) {
			// retorna 0, 1 , 2 posição na matrix
			// var id = bindModel.groups.$indexFor(group.$id);
			var refArray = bindModel.groups.$ref().child(group.$id+'/exercises');
			refArray.push({name:bindModel.exerciseName, group: group.group},function(error) {
				if(error){
					 console.log("erro ao salvar exercicio"+ error);
				}
			 });
		}
		bindModel.exerciseName = '';
	};
	var removeExercise = function(group,exercise){
		// bindModel.groups.$remove(group);
		var refExercise = bindModel.groups.$ref().child(group+'/exercises/'+exercise);
		refExercise.remove();
	};

	return {  
		bindModel : bindModel,
		addGroup: addGroup,
		removeGroup: removeGroup,
		addExercise: addExercise,
		removeExercise: removeExercise
	};
};
