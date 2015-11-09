//Control Signal Methods
var PC = '000000';

//000001

function pc(){
    PC = add(PC, '000001');
    return PC;
}


function fetch(){
    console.log('==========================================')
    var instruction = instrRegister[pc()];
	console.log("instruction register after fetch: "+instruction);
    decode(instruction);
}


function decode(instr){
    switch(instr.length){
        //R-type - 5 
        case 5:
			console.log("opcode rtype");
            rType(instr);
            break;
        //I-type - 4
        case 4:
			console.log("opcode itype");
            iType(instr);
            break;
        //J-type - 2
        case 2:
			console.log("opcode jtype");
            jType(instr);
            break;
        //Branch - 4
        case 4:
			console.log("opcode btype");
            branch(instr);
            break;
    }
}


function controlUnit(opcode){
    switch(opcode){
        case '0000'://Jump
            return 'jmp';
        case '0001'://Branch Less Than Equal
            return 'ble';
        case '0010'://Branch Greater Than
            return 'bgt';
        case '0011'://Branch Less Than
            return 'blt';
        case '0100'://Branch Greater Than Equal
            return 'bge';
        case '0101'://Branch Equal
            return 'beq';			
        case '0110'://Addition
            return 'add';
        case '0111'://Subtraction
            return 'sub';			
        case '1000'://Add Immediate
            return 'addi';
        case '1001'://Shift Right
            return 'shiftRight';
        case '1010'://Shift Left
            return 'shiftLeft';
        case '1011'://Or
            return 'or';
        case '1100'://Load Word
            return 'loadWord';
		case '1101'://Store Word
		    return 'storeWord';
		case '1110'://Exclusive Or (this is a new opcode for exclusive or)
		    return 'xor';
        /*
        case '1111':
            return '';
        */
    }
}


//R-type - 5 
function rType(instr){
    var opcode = instr[0];
    var rd = instr[1];
    var rs = instr[2];
    var rt = instr[3];
    var funct = instr[4];
    
    var type = controlUnit(opcode).trim();
	console.log("control unit opcode is "+type);
    switch(type){
        case 'add':
            executeAdd(rd, rs, rt);
            break;
		case 'or':
			executeOr(rd, rs, rt);
            break;
        case 'shiftLeft':
            sll(rd, rs, rt);
            break;
        case 'shiftRight':
            srl(rd, rs, rt);
            break;
        case 'xor':
            executeXor(rd, rs, rt);
            break;
    }
    
}

//I-type - 4
function iType(instr){
    var opcode = instr[0];
    var rd = instr[1];
    var rs = instr[2];
    var rt = instr[3];
    
    var type = controlUnit(opcode);
    console.log("control unit opcode is "+type);
    
    switch(type){
        case 'loadWord':
            lw(rd, rs, rt);
            break;
        case 'ble':
            ble(rs, rt, rt);
            break;
    }
}

//J-type - 2
function jType(instr){
    var opcode = instr[0];
    var address = instr[1];
    
    var type = controlUnit(opcode);
    console.log("control unit opcode is "+type);
    
    if(type == 'jmp')
        jmp(address);
    else
        console.log('Wrong Opcode ['+opcode+'] for J-Type Instr');
}

//Branch - 4
function branch(instr){
    var opcode = instr[0];
    var rs = instr[1];
    var rt = instr[2];
    var address = instr[3];
    
    var type = controlUnit(opcode);
}
