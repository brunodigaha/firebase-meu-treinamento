module.exports = function ($q,cfpLoadingBar,$firebaseArray,fbUtil) {


	//Referencia para firebase path /members
	var membersRef = fbUtil.ref('members');
	// var gym_membersRef = fbUtil.ref('gym_members');
	var gym_grafRef = fbUtil.ref('gym_graf','keyacad');
		
	// Array de ref firebase real time
	var membersArray = null;


	//Para inicializar a escuta com firebase eventos
	var init = function(){
		var deferred = $q.defer();
		cfpLoadingBar.start();
		if (membersArray === null || _.isEmpty(membersArray)){
			membersArray = $firebaseArray(membersRef);
			membersArray.$loaded()
				.then(function(data){
					cfpLoadingBar.complete();
					deferred.resolve(data);
				 })
				 .catch(function(error) {
					deferred.reject();
					console.log("Erro ao buscar alunos: ",error);
				 });
		}else {
			deferred.resolve(membersArray);
			cfpLoadingBar.complete();
		}
		
		return deferred.promise;
	};
	// init();


	var destroy = function() {
		if (membersArray){
			membersArray.$destroy();
		}
	};


	// Adicionar novo membro ao Firebase
	var addMember = function(member) {
		
		member.birthday = member.birthday.getTime();
		member.full_name = member.name +' '+member.surname;
		member.created = Firebase.ServerValue.TIMESTAMP;
		member.active = true;
		
		var ID = membersRef.push().key();
		var promise1 = membersRef.child(ID).set(member, function(error){
			if (error){
				console.log("Erro ao salvar Membro: "+ error);
			}
		});
		
		// var promise2 = gym_membersRef.child(ID).set({full_name:member.full_name,image:member.image,active:true},function(error){
		// 	if (error){
		// 		console.log("Erro ao salvar Membro: "+ error);
		// 	}
		// });
		
		var promise3 = gym_grafRef.transaction(function(current_value){
			return (current_value || 0)+1;
		},function(error){
			if (error){
				console.log("Erro ao salvar Membro: "+ error);
			}
		});
		
		return $q.all([promise1,promise3]);
	};


	var updateMember = function (ID,member) {

		var deferred = $q.defer();
		if (member.birthday) {
			member.birthday = member.birthday.getTime();
		}

		membersRef.child(ID).update(member,function(error){
			if (error){
				deferred.reject(error);
			}else{
				deferred.resolve(member);
			}
		});
		return deferred.promise;
	};


	var toggleActive = function(member){
		
		var deferred = $q.defer();
		var ID = member.$id;
		var updateMember = {};
		
		updateMember.active =  !member.active;
	
		membersRef.child(ID).update(updateMember,function(error){
			if (error){
				deferred.reject(error);
			}else{
				deferred.resolve(member);
			}
		});
	
		return deferred.promise;
	};


	var deleteMember = function(ID) {
		var deferred = $q.defer();
		membersRef.child(ID).remove(function(error){
			if (error){
				console.log("Erro ao excluir aluno",error);
				deferred.reject();
			}else{
				deferred.resolve(ID);
			}
		});
		return deferred.promise;
	};


	return {
		addMember : addMember,
		updateMember : updateMember,
		toggleActive : toggleActive,
		deleteMember : deleteMember,
		membersArray: membersArray,
		init: init,
		destroy : destroy
	};
};
