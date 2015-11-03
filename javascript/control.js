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
            break;
        case '0001'://Branch Less than equal
            break;
        case '0010'://Branch greater than
            break;
        case '1000'://Addi
            console.log(opcode+': addi');
            break;
        case '1001'://Shift Right
            break;
        case '1010'://Shift Left
            break;
        case '1011'://Or
            break;
        case '1100'://Xor
            break;
        case '1101'://Store Word
            break;
        case '1100'://Load Word
            break;
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
    
    controlUnit(opcode);
}

//Branch - 4
function branch(instr){
    var opcode = instr[0];
    var rs = instr[1];
    var rt = instr[2];
    var address = instr[3];
    
    controlUnit(opcode);
}
