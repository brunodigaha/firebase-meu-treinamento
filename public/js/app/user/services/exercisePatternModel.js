module.exports = function (fbUtil,$mdDialog, $mdToast,$firebaseArray,FBURL) {

	var bindModel = {
		groupName: '',
		exerciseName: '',
		isLoaded: false
	};


	var addGroup = function() {
		if (bindModel.groupName) {
			bindModel.groups.$add({
				group: bindModel.groupName
			});
			bindModel.groupName = '';
		}
	};
	var removeGroup = function(event,group){
		var confirm = $mdDialog.confirm()
			.title('Deseja Realmente Excluir o Grupo: '+ group.group.toString() )
			.content('Ao ser confirmada essa ação não pode ser desfeita!')
			.ariaLabel('Remover Grupo')
			.ok('Excluir Grupo')
			.cancel('Cancelar')
			.targetEvent(event);
			$mdDialog.show(confirm).then(function() {
				bindModel.groups.$remove(group).then( function(ref) {
					$mdToast.show(
						$mdToast.simple()
							.content("Grupo "+ group.group.toString()+' Excluído')
							.position("top right")
							.action('x')
							.hideDelay(2500)
					);
				});
			});
	};
	var init = function() {
		bindModel.groups = $firebaseArray(fbUtil.ref('gym','namesexercises'));
		bindModel.groups.$loaded().then(function(x) {
			console.log("carregou grupos");
			bindModel.isLoaded = true;
		});
	};

	init();

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
	var destroy = function() {
		bindModel.groups.$destroy();
	};

	return {  
		bindModel : bindModel,
		addGroup: addGroup,
		removeGroup: removeGroup,
		addExercise: addExercise,
		removeExercise: removeExercise,
		init: init,
		destroy: destroy
	};
};
