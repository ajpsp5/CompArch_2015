//Hazard Detection Unit

function checkForHazard(rs, rt){
	//Forwarding	
	//Check if rs and/or rt is same as Execute rd
	if(executeMemory['rd'] || executeMemory['fileAddres']){
		if(( (rs == executeMemory['rd']) || (rt == executeMemory['rd']) ) && (executeMemory['type'] != 'lw')){
			fileRegister[executeMemory['rd']] = executeMemory['value'];
			console.log('Forward [from execute] variable address: '+executeMemory['rd']+', value: '+executeMemory['value']);
                        html += '<h2 align="center" style="color: red">--- HAZARD DETECTED ---</h3>';
                        html += '<h3 align="center">Forward [from execute] variable address: '+executeMemory['rd']+', value: '+executeMemory['value']+'</h3>';
                        html += '<h2 align="center" style="color: red">^^^ HAZARD DETECTED ^^^</h3>';
		}else if(( (rs == executeMemory['fileAddres']) || (rt == executeMemory['fileAddres']) ) && (executeMemory['type'] == 'lw')){
			stalls = 2;
		}
	}

	//Check if rs and/or rt is same as Memory rd
	if(memoryWrite['rd']){
		if(( (rs == memoryWrite['rd']) || (rt == memoryWrite['rd']) ) && (memoryWrite['type'] != 'lw')){
			fileRegister[memoryWrite['rd']] = memoryWrite['value'];
			console.log('Forward [from memory] variable address: '+memoryWrite['rd']+', value: '+memoryWrite['value']);
                        html += '<h2 align="center" style="color: red">--- HAZARD DETECTED ---</h3>';
                        html += '<h3 align="center">Forward [from memory] variable address: '+memoryWrite['rd']+', value: '+memoryWrite['value']+'</h3>';
                        html += '<h2 align="center" style="color: red">^^^ HAZARD DETECTED ^^^</h3>';
		}else if(( (rs == memoryWrite['rd']) || (rt == memoryWrite['rd']) ) && (memoryWrite['type'] == 'lw')){
			stalls = 1;
		}
	}
	
	if(stalls > 0){
	    console.log('Stall Occured: Stall #'+stalls);
        html += '<h2 align="center" style="color: red">--- HAZARD DETECTED [STALL] ---</h3>';
        html += '<h3 align="center">Stall Occured: Stall</h3>';
        html += '<h2 align="center" style="color: red">^^^ HAZARD DETECTED ^^^</h3>';
		return true;
	}
	
	return false;
}
