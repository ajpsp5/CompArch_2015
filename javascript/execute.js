//Execute Phase

function jmp(address){
    //Set PC Address
	PC = address;
	//Move PC Back One
	PC = sub(address,DecimalToBinary(1));
	fetch();
}

function ble(){
}

function bgt(){
}

function blt(){
}

function bge(){
}

function beq(){
}

function add(){
}

function sub(){
}

function addi(){
}

function srl(){
}

function sll(){
}

function or(){
}

function lw(){
}

function sw(){
}

function xor(){
}
