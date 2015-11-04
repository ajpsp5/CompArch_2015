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
        case '0001'://Branch Less than equal
            return 'ble';
        case '0010'://Branch greater than
            return 'bgt';
        case '1000'://Addi
            return 'addi';
        case '1001'://Shift Right
            return 'shiftRight';
        case '1010'://Shift Left
            return 'shiftLeft';
        case '1011'://Or
            return 'or';
        case '1100'://Xor
            return 'xor';
        case '1101'://Store Word
            return 'storeWord';
        case '1100'://Load Word
            return 'loadWord';
        /*
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
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
    
    controlUnit(opcode);
}

//I-type - 4
function iType(instr){
    var opcode = instr[0];
    var rd = instr[1];
    var rs = instr[2];
    var rt = instr[3];
    
    controlUnit(opcode);
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
    
    controlUnit(opcode);
}
