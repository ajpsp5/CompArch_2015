//Control Signal Methods
var PC = '000000';

//000001

function pc(){
    PC = add(PC, '000001');
    return PC;
}


function fetch(){
    console.log('============== Fetch ===================');
    var instruction = instrRegister[pc()];
	console.log("instruction register after fetch: "+instruction);
	fetchDecode = instruction;
    //decode(instruction);
}


function decode(instr){
    try{
        if(instr.length){
            decodeExecute = [];
            console.log('============== Decode ===================');
        }
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
    }catch(e){}
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
	decodeExecute['func'] = null;
	decodeExecute['address'] = null;
	
    switch(type){
        case 'add':
            //decodeExecute = 'executeAdd('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'executeAdd';
            decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
		case 'or':
		    console.log(rs);
			//decodeExecute = 'executeOr('+rd+', '+rs+', '+rt+');';
			decodeExecute['func'] = 'executeOr';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
			break;
        case 'shiftLeft':
            //decodeExecute = 'sll('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'sll';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
        case 'shiftRight':
            //decodeExecute = 'srl('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'srl';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
        case 'xor':
            //decodeExecute = 'executeXor('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'executeXor';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
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
   decodeExecute['address'] = null;
    
    switch(type){
        case 'loadWord':
            //decodeExecute = 'lw('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'lw';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
        case 'ble':
            //decodeExecute = 'ble('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'ble';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
        case 'storeWord':
            //decodeExecute = 'sw('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'sw';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
        case 'addi':
            //decodeExecute = 'executeAddi('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'executeAddi';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
        case 'bgt':
            //decodeExecute = 'bgt('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'bgt';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
        case 'blt':
            //decodeExecute = 'blt('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'blt';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
        case 'bge':
            //decodeExecute = 'bge('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'bge';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
        case 'beq':
            //decodeExecute = 'beq('+rd+', '+rs+', '+rt+');';
            decodeExecute['func'] = 'beq';
			decodeExecute['rd'] = rd;
            decodeExecute['rs'] = rs;
            decodeExecute['rt'] = rt;
            break;
    }
}

//J-type - 2
function jType(instr){
    var opcode = instr[0];
    var address = instr[1];
    
    var type = controlUnit(opcode);
    console.log("control unit opcode is "+type);
    
    if(type == 'jmp'){
        //decodeExecute = 'jmp('+address+');';
        decodeExecute['func'] = 'jmp';
		decodeExecute['address'] = rd;
		decodeExecute['func'] = null;
		decodeExecute['rd'] = null;
        decodeExecute['rs'] = null;
        decodeExecute['rt'] = null;
    }else
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
