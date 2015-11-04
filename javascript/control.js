//Control Signal Methods
var PC = '000000';

//000001

function pc(){
    PC = add(PC, '000001');
    return PC;
}


function fetch(){
    var instruction = instrRegister[pc()];
    decode(instruction);
}


function decode(instr){
    switch(instr.length){
        //R-type - 5 
        case 5:
            rType(instr);
            break;
        //I-type - 4
        case 4:
            iType(instr);
            break;
        //J-type - 2
        case 2:
            jType(instr);
            break;
        //Branch - 4
        case 4:
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
    
    var type = controlUnit(opcode);
}

//I-type - 4
function iType(instr){
    var opcode = instr[0];
    var rd = instr[1];
    var rs = instr[2];
    var rt = instr[3];
    
    var type = controlUnit(opcode);
}

//J-type - 2
function jType(instr){
    var opcode = instr[0];
    var address = instr[1];
    
    var type = controlUnit(opcode);
	//Set PC Address
	PC = address;
	//Move PC Back One
	PC = sub(address,DecimalToBinary(1));
	fetch();
}

//Branch - 4
function branch(instr){
    var opcode = instr[0];
    var rs = instr[1];
    var rt = instr[2];
    var address = instr[3];
    
    var type = controlUnit(opcode);
}
