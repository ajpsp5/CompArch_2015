//Execute Phase

function jmp(address){
    //Set PC Address
	PC = address;
	//Move PC Back One
	PC = sub(address,DecimalToBinary(1));
	fetch();
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
    fileRegister[rd] = add(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
	fetch();
}

function executeSub(rd, rs, rt){
	console.log("subtracting ("+rs+" - "+rt+") into ("+rd+")");
	fileRegister[rd] = sub(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
    fetch();
}

function executeAddi(rd, rs, value){
    fileRegister[rd] = addi(fileRegister[rs], value);
    fetch();
}

function srl(rd, rs, rt){
    console.log("Shifting Right ("+rs+" >> "+rt+") into ("+rd+")");
    fileRegister[rd] = shiftRight(fileRegister[rs], fileRegister[rt]);
    console.log(fileRegister);
    fetch();
}

function sll(rd, rs, rt){
    console.log("Shifting Left ("+rs+" << "+rt+") into ("+rd+")");
    fileRegister[rd] = shiftLeft(fileRegister[rs], fileRegister[rt]);
    console.log(fileRegister);
    fetch();
}

function executeOr(rd, rs, rt){
    console.log("oring? ("+rs+" or "+rt+") into ("+rd+")");
	fileRegister[rd] = or(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
    fetch();
}

function lw(rd, rs, address){
    console.log('Load Word');
    console.log('Rd: '+rd+', Rs: '+rs+', Address: '+address);
    if(rs){
        if(BinaryToDecimal(rs) != 0)
            fileRegister[rd] = memRegister[add(address,  fileRegister[rs])];
    }
    else
        fileRegister[rd] = memRegister[address];
    
    console.log('File: ');
    console.log(fileRegister);
    console.log('Memory: ');
    console.log(memRegister);
    fetch();
}

function sw(rd, rs, address){
    console.log('Save Word');
    if(rs){
        if(BinaryToDecimal(rs) != 0)
            memRegister[add(address,  fileRegister[rs])] = fileRegister[rd];
    }else
        memRegister[address] = fileRegister[rd];
    console.log('File: '+fileRegister+', Mem: '+memRegister);    
    fetch();
}

function executeXor(rd, rs, rt){
	console.log("xor ("+rs+" xor "+rt+") into ("+rd+")");
	fileRegister[rd] = xor(fileRegister[rs], fileRegister[rt]);
    console.log(fileRegister);
	fetch();
}
