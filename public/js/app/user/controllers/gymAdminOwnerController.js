var fs = require('fs');
module.exports = function($scope,$timeout,cfpLoadingBar,fbUtil,$mdDialog) {

	var changeList = {};
	var gymBackup = {};

	$scope.ownerDialog = function(ev) {
		changeList = {}; 
		gymBackup = angular.copy($scope.gym);
		$mdDialog.show({
			controller: 'ownerAdminDialogController',
			scope: $scope,
			preserveScope: true,
			template: fs.readFileSync(__dirname + '/../templates/ownerAdminDialogTemplate.html'),
			parent: angular.element(document.body),
			targetEvent: ev,
		})
		.then(function(answer) {
			$scope.updateGym();
		}, function() {
			if (Object.keys(changeList).length !== 0) {
				$scope.gym = gymBackup;
				gymBackup = {};
			}
		});
	};
	
	cfpLoadingBar.start();
	var gymRef = fbUtil.ref('gym','-JyEh-WIYou07h4IZkas');
	gymRef.once('value', function(data) {
		$timeout(function() {
			$scope.gym = data.val();
			cfpLoadingBar.complete();
		});
	});
	$scope.addGym = function() {
		newGym = gymRef.push();
		newGym.set({
			gym: "Dalton Morais",
			owner: "Dalton Morais da Silva",
			address: "Rua Alves Costa, Jardim Alvorada Guaxupé - MG",
			contact: "35511280"
		});
	};
	$scope.change = function(key) {
		changeList[key] = $scope.gym[key];
	};
	$scope.updateGym = function() {
		var onComplete = function(error){
			if (error) {
				$scope.gym = gymBackup;
				console.log("erro");
			} else {
				gymBackup = {};
			}
		};
		gymRef.update(changeList,onComplete);
	};


};
