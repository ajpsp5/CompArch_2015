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

function add(rs, rt){
    fileRegister[rd] = add(fileRegister[rs], fileRegister[rt]);
}

function sub(rs, rt){
	fileRegister[rd] = sub(fileRegister[rs], fileRegister[rt]);
}

function addi(){
}

function srl(){
}

function sll(){
}

function or(rs, rt){
	fileRegister[rd] = or(fileRegister[rs], fileRegister[rt]);
}

function lw(){
}

function sw(){
}

function xor(rs, rt){
	fileRegister[rd] = or(fileRegister[rs], fileRegister[rt]);
}
