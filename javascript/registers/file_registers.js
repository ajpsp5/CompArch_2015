//File Register Array & Methods

//Global Array
var fileRegister = [];
    fileRegister['000'] = '0000'+'0000'+'0000'+'0000'; //$Z
    fileRegister['001'] = '0000'+'0000'+'0100'+'0000'; //$v0
    fileRegister['010'] = '0001'+'0000'+'0001'+'0000'; //$v1
    fileRegister['011'] = '0000'+'0000'+'0000'+'1111'; //$v2
    fileRegister['100'] = '0000'+'0000'+'1111'+'0000'; //$v3
    fileRegister['101'] = '0000'+'0000'+'0000'+'0000'; //$v4 or $t0
    fileRegister['110'] = '0000'+'0000'+'0001'+'0000'; //$v5 or $t1
    fileRegister['111'] = '0000'+'0000'+'0000'+'0101'; //$v6 or $t2

console.log('File Register');
console.log(fileRegister);

//Methods
