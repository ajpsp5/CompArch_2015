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

function addi(){
}

function srl(){
}

function sll(){
}

function executeOr(rd, rs, rt){
	console.log("oring? ("+rs+" or "+rt+") into ("+rd+")");
	fileRegister[rd] = or(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
	fetch();
}

function lw(){
}

function sw(){
}

function xor(rd, rs, rt){
	console.log("xor ("+rs+" xor "+rt+") into ("+rd+")");
	fileRegister[rd] = xor(fileRegister[rs], fileRegister[rt]);
	console.log(fileRegister);
	fetch();
}
