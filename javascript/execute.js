//Execute Phase

function jmp(address){
    //Set PC Address
	PC = address;
	//Move PC Back One
	PC = sub(address,DecimalToBinary(1));
	fetch();
}

function ble(rs, rt, address){
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs <= rt){
        PC = address;
        fetch();
        return;
    }    
}

function bgt(rs, rt, address){
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs > rt){
        PC = address;
        fetch();
        return;
    }
}

function blt(rs, rt, address){
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs < rt){
        PC = address;
        fetch();
        return;
    }
}

function bge(rs, rt, address){
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs >= rt){
        PC = address;
        fetch();
        return;
    }
}

function beq(rs, rt, address){
    rs = BinaryToDecimal(rs);
    rt = BinaryToDecimal(rt);
    
    if(rs == rt){
        PC = address;
        fetch();
        return;
    }
}

function executeAdd(rd, rs, rt){
    fileRegister[rd] = add(fileRegister[rs], fileRegister[rt]);
    fetch();
}

function executeSub(rd, rs, rt){
	fileRegister[rd] = sub(fileRegister[rs], fileRegister[rt]);
	fetch();
}

function executeAddi(rd, rs, value){
    fileRegister[rd] = addi(fileRegister[rs], value);
    fetch();
}

function srl(rd, rs, rt){
    fileRegister[rd] = shiftRight(fileRegister[rs], fileRegister[rt]);
    fetch();
}

function sll(){
    fileRegister[rd] = shiftLeft(fileRegister[rs], fileRegister[rt]);
    fetch();
}

function executeOr(rd, rs, rt){
	fileRegister[rd] = or(fileRegister[rs], fileRegister[rt]);
	fetch();
}

function lw(rd, rs, address){
    if(rs)
    if(BinaryToDecimal(rs) != 0)
        fileRegister[rd] = memRegister[add(address,  fileRegister[rs])];
    else
        fileRegister[rd] = memRegister[address];
    fetch();
}

function sw(rd, rs, address){
    if(rs)
    if(BinaryToDecimal(rs) != 0)
        memRegister[add(address,  fileRegister[rs])] = fileRegister[rd];
    else
        memRegister[address] = fileRegister[rd];
    fetch();
}

function xor(rd, rs, rt){
	fileRegister[rd] = xor(fileRegister[rs], fileRegister[rt]);
	fetch();
}
