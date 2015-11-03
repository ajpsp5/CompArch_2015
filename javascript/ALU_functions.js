//Methods For ALU 



function shiftLeft(value, shifts){
    var bitLength = value.length;
    var retval = BinaryToDecimal(value);
    retval = DecimalToBinary(retval << shifts);
    while(retval.length > bitLength){
        retval = retval.substr(1);  
    }
    return retval;
}

function shiftRight(value, shifts){
    var bitLength = value.length;
    var retval = BinaryToDecimal(value);
    retval = DecimalToBinary(retval >> shifts);
    while(retval.length < bitLength){
        retval = '0'+retval;  
    }
    return retval;
}

function or(value1, value2){
    var value1 = BinaryToDecimal(value1);
    var value2 = BinaryToDecimal(value2);
    retval = DecimalToBinary(value1 | value2);
    return retval;
}

function xor(value1, value2){
    return value1 ^ value2;
}

function and(value1, value2){
    var bitLen = value1.length;
    if(value1.length != value2.length){
        if(value1.length > value2.length){
            while(value2.length < value1.length)
                value2 = '0'+value2;
        }else{
            bitLen = value2.length;
            while(value1.length < value2.length)
                value1 = '0'+value1;
        }
    }
    
    retval = value1 & value2;
    
    if(retval.length != bitLen){
        while(retval.length != bitLen){
            retval = '0'+retval;
        }
    }
    
    return retval;
}

function add(value1, value2){
    value1 = BinaryToDecimal(value1);
    value2 = BinaryToDecimal(value2);
    var total = value1 + value2;
    return DecimalToBinary(total);
}

function sub(value1, value2){
    value1 = BinaryToDecimal(value1);
    value2 = BinaryToDecimal(value2);
    var total = value1 - value2;
    return DecimalToBinary(total);
}

//var tmp = and(DecimalToBinary(2), DecimalToBinary(6));
//console.log('Tmp: '+tmp);



