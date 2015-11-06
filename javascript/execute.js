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

function add(rd, rs, rt){
    fileRegister[rd] = add(fileRegister[rs], fileRegister[rt]);
}

function sub(rd, rs, rt){
	fileRegister[rd] = sub(fileRegister[rs], fileRegister[rt]);
}

function addi(){
}

function srl(){
}

function sll(){
}

function or(rd, rs, rt){
	fileRegister[rd] = or(fileRegister[rs], fileRegister[rt]);
}

function lw(){
}

function sw(){
}

function xor(rd, rs, rt){
	fileRegister[rd] = or(fileRegister[rs], fileRegister[rt]);
}
