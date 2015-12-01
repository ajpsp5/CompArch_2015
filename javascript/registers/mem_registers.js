//Memory Register Array & Methods


//Global Array
var memRegister = [];
    memRegister['000000'] = '0000'+'0000'+'0001'+'0000'; //$a0
    memRegister['000001'] = '0000'+'0000'+'0000'+'0101'; //$a1
    memRegister['000010'] = '0000'+'0000'+'0100'+'0101'; //$a2
    memRegister['000011'] = '0000'+'0000'+'0010'+'0101'; //$a3
	memRegister['000100'] = '1111'+'1111'+'0000'+'0000'; //$a4
	memRegister['000101'] = '0000'+'0000'+'1111'+'1111'; //$a5

console.log('Mem Register');
console.log(memRegister);
//Methods
