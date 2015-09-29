var fs = require('fs');
module.exports = function($scope,$mdToast,membersService,$timeout,$mdDialog) {

	membersService.init()
		.then(function(members){
			$scope.members = members;
		},function(error){
			console.log(error);
		});

	$scope.newMemberDialog = function(ev) {
		$mdDialog.show({
			controller: 'membersAdminDialogController',
			// scope: $scope,
			// preserveScope: true,
			locals: null,
			// bindToController: true,
			escapeToClose: false,
			template: fs.readFileSync(__dirname + '/../templates/membersAdminDialogTemplate.html'),
			parent: angular.element(document.body),
			targetEvent: ev,
		})
		.then(function(member) {
			$mdToast.show(
				$mdToast.simple()
					.content("Aluno "+ member+' Inserido!')
					.position("top right")
					.action('x')
					.hideDelay(2500)
			);
		}, function() {
			// if (Object.keys(changeList).length !== 0) {
			// 	$scope.gym = gymBackup;
			// 	gymBackup = {};
			// }
		});
	};
	$scope.editMemberDialog = function(ev,member) {
		var memberEdit = angular.copy(member);
		memberEdit.birthday = new Date(memberEdit.birthday);
		// console.log(memberEdit);
		$mdDialog.show({
			controller: 'membersAdminDialogController',
			// scope: $scope,
			// preserveScope: true,
			locals: memberEdit,
			// bindToController: true,
			escapeToClose: false,
			template: fs.readFileSync(__dirname + '/../templates/membersAdminDialogTemplate.html'),
			parent: angular.element(document.body),
			targetEvent: ev,
		})
		.then(function(member) {
			if (!_.isEmpty(member)) {
				$mdToast.show(
					$mdToast.simple()
						.content("Aluno "+ member+' Atualizado!')
						.position("top right")
						.action('x')
						.hideDelay(2500)
				);
			}
		}, function() {
			// if (Object.keys(changeList).length !== 0) {
			// 	$scope.gym = gymBackup;
			// 	gymBackup = {};
			// }
		});
	};
	$scope.toggleActive = function(member) {
		var mode = "ATIVAR";
		if (member.active) {
			mode = "DESATIVAR";
		}
		console.log(member.active);
		var isActive = member.active;
		member.active = !isActive;

		var confirm = $mdDialog.confirm()
			.title('Deseja '+ mode +' o aluno: '+ member.full_name )
			.content('Alunos desativados não podem ser gerenciados!')
			.ariaLabel('Desativar Aluno')
			.ok(mode+' Aluno')
			.cancel('Cancelar')
			.targetEvent(event);
			$mdDialog.show(confirm).then(function() {
				membersService.toggleActive(member).then(function(data){
					$mdToast.show(
						$mdToast.simple()
							.content("Aluno "+ member.name + mode)
							.position("top right")
							.action('x')
							.hideDelay(2500)
					);
				}, function(error) {
					console.log(error);
				});
			},function(){
				console.log("cancelou");
				member.active = isActive;
			});
	};

	$scope.deleteMember = function(member) {
		var confirm = $mdDialog.confirm()
			.title('Deseja EXCLUIR o aluno: '+ member.full_name )
			.content('Ao ser confirmada essa ação não pode ser desfeita!')
			.ariaLabel('Remover Aluno')
			.ok('Excluir Aluno')
			.cancel('Cancelar')
			.targetEvent(event);
			$mdDialog.show(confirm).then(function() {
				membersService.deleteMember(member.$id).then(function(data){
					$mdToast.show(
						$mdToast.simple()
							.content("Aluno "+ member.name+' Atualizado!')
							.position("top right")
							.action('x')
							.hideDelay(2500)
					);
				}, function(error) {
					console.log(eror);
				});
			});
	};

};
