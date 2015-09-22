module.exports = function ($q,fbUtil) {

	//Referencia para firebase path /members
	var membersRef = fbUtil.ref('members');
	var gym_membersRef = fbUtil.ref('gym_members');
	var gym_grafRef = fbUtil.ref('gym_graf','keyacad');

	// Adicionar novo membro ao Firebase
	var addMember = function(member) {
		
		member.birthday = member.birthday.getTime();
		member.full_name = member.name +' '+member.surname;
		member.created = Date.now();

		var ID = membersRef.push().key();

		var promise1 = membersRef.child(ID).set(member, function(error){
			if (error){
				console.log("Erro ao salvar Membro: "+ error);
			}
		});

		var promise2 = gym_membersRef.child(ID).set({full_name:member.full_name,image:member.image,active:true},function(error){
			if (error){
				console.log("Erro ao salvar Membro: "+ error);
			}
		});

		var promise3 = gym_grafRef.transaction(function(current_value){
			return (current_value || 0)+1;
		},function(error){
			if (error){
				console.log("Erro ao salvar Membro: "+ error);
			}
		});

		return $q.all([promise1,promise2,promise3]);
	};

	return {
		addMember : addMember
	};
};
