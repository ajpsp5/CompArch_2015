//Hazard Detection Unit

function checkForHazard(rs, rt){
	//Forwarding	
	//Check if rs and/or rt is same as Execute rd
	if(executeMemory['rd']){
		if((rs == executeMemory['rd']) || rt == executeMemory['rd']){
			fileRegister[executeMemory['rd']] = executeMemory['value'];
			console.log('Forward [from execute] variable address: '+executeMemory['rd']+', value: '+executeMemory['value']);
		}
	}

	//Check if rs and/or rt is same as Memory rd
	if(memoryWrite['rd']){
		if((rs == memoryWrite['rd']) || (rt == memoryWrite['rd'])){
			fileRegister[memoryWrite['rd']] = memoryWrite['value'];
			console.log('Forward [from memory] variable address: '+memoryWrite['rd']+', value: '+memoryWrite['value']);
		}
	}
}
