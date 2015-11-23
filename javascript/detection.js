//Hazard Detection Unit

function checkForHazard(rs, rt){
	//Forwarding	
	//Check if rs and/or rt is same as Execute rd
	if(executeMemory['rd']){
		if((rs == executeMemory['rd']) || (rt == executeMemory['rd']) && (executeMemory['type'] != 'lw')){
			fileRegister[executeMemory['rd']] = executeMemory['value'];
			console.log('Forward [from execute] variable address: '+executeMemory['rd']+', value: '+executeMemory['value']);
		}else if((rs == executeMemory['rd']) || (rt == executeMemory['rd']) && (executeMemory['type'] == 'lw')){
			if(stalls == 0)
				stalls = 2;
			else if(stalls > 0)
				stalls--;
			console.log('Stall Occured: Stall #'+stalls);
			return true;
		}
	}

	//Check if rs and/or rt is same as Memory rd
	if(memoryWrite['rd']){
		if((rs == memoryWrite['rd']) || (rt == memoryWrite['rd'])){
			fileRegister[memoryWrite['rd']] = memoryWrite['value'];
			console.log('Forward [from memory] variable address: '+memoryWrite['rd']+', value: '+memoryWrite['value']);
		}else if((rs == memoryWrite['rd']) || (rt == memoryWrite['rd']) && (executeMemory['type'] == 'lw')){
			if(stalls == 0)
				stalls = 1;
			else if(stalls > 0)
				stalls--;
			console.log('Stall Occured: Stall #'+stalls);
			return true;
		}
	}
	return false;
}
