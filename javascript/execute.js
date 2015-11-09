//Execute Phase

function jmp(address){
    //Set PC Address
	//PC = address;
	//Move PC Back One
	//PC = sub(address,DecimalToBinary(1));
	executeMemory['address'] = address;
    executeMemory['type'] = 'jmp';
    //fetch();
}

function ble(rs, rt, address){
    console.log('Branching: if( '+rs+' <= '+rt+') goto '+address);
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs <= rt){
        jmp(address);
        return;
    }    
}

function bgt(rs, rt, address){
    console.log('Branching: if( '+rs+' > '+rt+') goto '+address);
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs > rt){
        jmp(address);
        return;
    }
}

function blt(rs, rt, address){
    console.log('Branching: if( '+rs+' > '+rt+') goto '+address);
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs < rt){
        jmp(address);
        return;
    }
}

function bge(rs, rt, address){
    console.log('Branching: if( '+rs+' >= '+rt+') goto '+address);
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs >= rt){
        jmp(address);
        return;
    }
}

function beq(rs, rt, address){
    console.log('Branching: if( '+rs+' == '+rt+') goto '+address);
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs == rt){
        jmp(address);
        return;
    }
}

function executeAdd(rd, rs, rt){
    console.log("adding ("+rs+" + "+rt+") into ("+rd+")");
    executeMemory['value'] = add(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
    //fileRegister[rd] = add(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
	//fetch();
}

function executeSub(rd, rs, rt){
	console.log("subtracting ("+rs+" - "+rt+") into ("+rd+")");
	executeMemory['value'] = sub(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
	//fileRegister[rd] = sub(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
    //fetch();
}

function executeAddi(rd, rs, value){
    console.log("adding[im] ("+rs+" + "+value+") into ("+rd+")");
    executeMemory['value'] = addi(fileRegister[rs], value);
    executeMemory['rd'] = rd;
    //fileRegister[rd] = addi(fileRegister[rs], value);
    console.log(fileRegister);
    //fetch();
}

function srl(rd, rs, rt){
    console.log("Shifting Right ("+rs+" >> "+rt+") into ("+rd+")");
    executeMemory['value'] = shiftRight(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
    //fileRegister[rd] = shiftRight(fileRegister[rs], fileRegister[rt]);
    console.log(fileRegister);
    //fetch();
}

function sll(rd, rs, rt){
    console.log("Shifting Left ("+rs+" << "+rt+") into ("+rd+")");
    executeMemory['value'] = shiftLeft(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
    //fileRegister[rd] = shiftLeft(fileRegister[rs], fileRegister[rt]);
    console.log(fileRegister);
    //fetch();
}

function executeOr(rd, rs, rt){
    console.log("oring? ("+rs+" or "+rt+") into ("+rd+")");
	executeMemory['value'] = or(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
	//fileRegister[rd] = or(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
    //fetch();
}

function lw(rd, rs, address){
    console.log('Load Word');
    console.log('Rd: ('+rd+')'+fileRegister[rd]+', Rs: ('+rs+')'+fileRegister[rd]+', Address: ('+address+')'+memRegister[address]);
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
	executeMemory['value'] = xor(fileRegister[rs], fileRegister[rt]);
    executeMemory['rd'] = rd;
	//fileRegister[rd] = xor(fileRegister[rs], fileRegister[rt]);
    console.log(fileRegister);
	//fetch();
}
