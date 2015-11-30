//Execute Phase

function jmp(address){
    //Set PC Address
	//PC = address;
	//Move PC Back One
	//PC = sub(address,DecimalToBinary(1));
	executeMemory['address'] = address;
    executeMemory['type'] = 'jmp';
	//PC = sub(address, '000001');
	fetchDecode = null;
	decodeExecute = null;
    //fetch();
}

function ble(rs, rt, address){
    console.log('Branching: if( '+rs+'['+fileRegister[rs]+'] <= '+rt+'['+fileRegister[rt]+']) goto '+address);
    
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4>Branching: if( '+rs+'['+fileRegister[rs]+'] <= '+rt+'['+fileRegister[rt]+']) goto '+address+'</h4>';
		html += '</div>';
	
	rs = BinaryToDecimal(fileRegister[rs]);
    rt = BinaryToDecimal(fileRegister[rt]);
    
    if(rs <= rt){
        jmp(address);
		
        return;
    }
	decodeExecute = null;
	executeMemory = null;
}

function bgt(rs, rt, address){
    console.log('Branching: if( '+rs+'['+fileRegister[rs]+'] > '+rt+'['+fileRegister[rt]+']) goto '+address);
    
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4>Branching: if( '+rs+'['+fileRegister[rs]+'] > '+rt+'['+fileRegister[rt]+']) goto '+address+'</h4>';
		html += '</div>';
	
	rs = BinaryToDecimal(fileRegister[rs]);
    rt = BinaryToDecimal(fileRegister[rt]);
    
    if(rs > rt){
		jmp(address);
        return;
    }
	decodeExecute = null;
	executeMemory = null;
}

function blt(rs, rt, address){
    console.log('Branching: if( '+rs+'['+fileRegister[rs]+'] < '+rt+'['+fileRegister[rt]+']) goto '+address);
    
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4>Branching: if( '+rs+'['+fileRegister[rs]+'] < '+rt+'['+fileRegister[rt]+']) goto '+address+'</h4>';
		html += '</div>';
	
	rs = BinaryToDecimal(fileRegister[rs]);
    rt = BinaryToDecimal(fileRegister[rt]);
    
    if(rs < rt){
        jmp(address);
        return;
    }
	decodeExecute = null;
	executeMemory = null;
}

function bge(rs, rt, address){
    console.log('Branching: if( '+rs+'['+fileRegister[rs]+'] >= '+rt+'['+fileRegister[rt]+']) goto '+address);
    
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4>Branching: if( '+rs+'['+fileRegister[rs]+'] >= '+rt+'['+fileRegister[rt]+']) goto '+address+'</h4>';
		html += '</div>';
	
	rs = BinaryToDecimal(fileRegister[rs]);
    rt = BinaryToDecimal(fileRegister[rt]);
    
    if(rs >= rt){
        jmp(address);
        return;
    }
	decodeExecute = null;
	executeMemory = null;
}

function beq(rs, rt, address){
    console.log('Branching: if( '+rs+'['+fileRegister[rs]+'] == '+rt+'['+fileRegister[rt]+']) goto '+address);
   
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4>Branching: if( '+rs+'['+fileRegister[rs]+'] == '+rt+'['+fileRegister[rt]+']) goto '+address+'</h4>';
		html += '</div>';
	
	rs = BinaryToDecimal(fileRegister[rs]);
    rt = BinaryToDecimal(fileRegister[rt]);
    
    if(rs == rt){
        jmp(address);
        return;
    }
	decodeExecute = null;
	executeMemory = null;
}

function executeAdd(rd, rs, rt){
    console.log("adding ("+rs+" + "+rt+") into ("+rd+")");
	
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4> adding (['+rs+'] + ['+rt+']) into (['+rd+'])</h4>';
		html += '</div>';
	
    executeMemory['value'] = add(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
    //fileRegister[rd] = add(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
	//fetch();
}

function executeSub(rd, rs, rt){
	console.log("subtracting ("+rs+" - "+rt+") into ("+rd+")");
	
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4> subtracting (['+rs+'] - ['+rt+']) into (['+rd+'])</h4>';
		html += '</div>';
	
	executeMemory['value'] = sub(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
	//fileRegister[rd] = sub(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
    //fetch();
}

function executeAddi(rd, rs, value){
    console.log("adding[im] ("+rs+" + "+value+") into (["+rd+"])");
    
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4> adding[im] (['+rs+'] + '+value+') into (['+rd+'])</h4>';
		html += '</div>';
	
	executeMemory['value'] = addi(fileRegister[rs], value);
    executeMemory['rd'] = rd;
    //fileRegister[rd] = addi(fileRegister[rs], value);
    console.log(fileRegister);
    //fetch();
}

function srl(rd, rs, rt){
    console.log("Shifting Right ("+rs+" >> "+rt+") into (["+rd+"])");
    
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4> Shifting right (['+rs+'] >> ['+rt+']) into (['+rd+')</h4>';
		html += '</div>';
	
	executeMemory['value'] = shiftRight(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
    //fileRegister[rd] = shiftRight(fileRegister[rs], fileRegister[rt]);
    console.log(fileRegister);
    //fetch();
}

function sll(rd, rs, rt){
    console.log("Shifting Left ("+rs+" << "+rt+") into ("+rd+")");
    
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4> Shifting left (['+rs+'] << ['+rt+']) into (['+rd+'])</h4>';
		html += '</div>';
	
	executeMemory['value'] = shiftLeft(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
    //fileRegister[rd] = shiftLeft(fileRegister[rs], fileRegister[rt]);
    console.log(fileRegister);
    //fetch();
}

function executeOr(rd, rs, rt){
    console.log("oring? ("+rs+" or "+rt+") into (["+rd+"])");
	executeMemory['value'] = or(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
	//fileRegister[rd] = or(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
    //fetch();
}

function lw(rd, rs, address){
    console.log('Load Word');
    console.log('Rd: ('+rd+')'+fileRegister[rd]+', Rs: ('+rs+')'+fileRegister[rd]+', Address: ('+address+')'+memRegister[address]);
	
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4>Load Word: Rd: ('+rd+')'+fileRegister[rd]+', Rs: ('+rs+')'+fileRegister[rd]+', Address: ('+address+')'+memRegister[address]+'</h4>';
		html += '</div>';
	
    if(BinaryToDecimal(rs) != 0){
        executeMemory['memAddress'] = add(address,  fileRegister[rs]);
        executeMemory['fileAddres'] = rd;
        executeMemory['type'] = 'lw';
        //fileRegister[rd] = memRegister[add(address,  fileRegister[rs])];
        console.log('rs: '+BinaryToDecimal(rs));
    }else{
        executeMemory['memAddress'] = address;
        executeMemory['fileAddres'] = rd;
        executeMemory['type'] = 'lw';
        //fileRegister[rd] = memRegister[address];
    }
    
    console.log('File: ');
    console.log(fileRegister);
    console.log('Memory: ');
    console.log(memRegister);
    //fetch();
}

function sw(rd, rs, address){
    console.log('Save Word');
	
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4> Store Word: Rd: ('+rd+')'+fileRegister[rd]+', Rs: ('+rs+')'+fileRegister[rd]+', Address: ('+address+')'+memRegister[address]+'</h4>';
		html += '</div>';
	
    console.log('Rd: ('+rd+')'+fileRegister[rd]+', Rs: ('+rs+')'+fileRegister[rd]+', Address: ('+address+')'+memRegister[address]);
    if(BinaryToDecimal(rs) != 0){
        executeMemory['memAddress'] = add(address,  fileRegister[rs]);
        executeMemory['fileAddres'] = rd;
        executeMemory['type'] = 'sw';
       //memRegister[add(address,  fileRegister[rs])] = fileRegister[rd];
       console.log('rs: '+BinaryToDecimal(rs));
    }else{
        executeMemory['memAddress'] = address;
        executeMemory['fileAddres'] = rd;
        executeMemory['type'] = 'sw';
        //memRegister[address] = fileRegister[rd];
    }
    console.log('File: ');
    console.log(fileRegister);
    console.log('Memory: ');
    console.log(memRegister);    
    //fetch();
}

function executeXor(rd, rs, rt){
	console.log("xor ("+rs+" xor "+rt+") into ("+rd+")");
	
	html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
		html += '<h4> exclusive or (['+rs+'] xor ['+rt+']) into (['+rd+'])</h4>';
		html += '</div>';
	
	executeMemory['value'] = xor(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
	//fileRegister[rd] = xor(fileRegister[rs], fileRegister[rt]);
    console.log(fileRegister);
	//fetch();
}
