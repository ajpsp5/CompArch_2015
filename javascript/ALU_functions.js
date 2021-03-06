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
	var length =  value1.length;
    var value1 = BinaryToDecimal(value1);
    var value2 = BinaryToDecimal(value2);
    retval = DecimalToBinary(value1 | value2);
	while(retval.length != length)
		retval = '0'+retval;
    return retval;
}

function xor(value1, value2){
	var length =  value1.length;
    var value1 = BinaryToDecimal(value1);
    var value2 = BinaryToDecimal(value2);
	retval = DecimalToBinary(value1 ^ value2);
	while(retval.length != length)
		retval = '0'+retval;
    return retval;
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
    var tmpLength = value1.length;
    if(value1.length > value2.length)
        tmpLength = value1.length;
    else
        tmpLength = value2.length;
    value1 = BinaryToDecimal(value1);
    value2 = BinaryToDecimal(value2);
    var total = value1 + value2;
    total = DecimalToBinary(total);
    while(tmpLength > total.length){
        total = '0'+total;
    }
    return total;
}

function addi(value1, value2){
    var tmpLength = value1.length;
    value1 = BinaryToDecimal(value1);
    
    if((value2.charAt(0) == '1') || (value2.charAt(0) == 1)){
        var tmp = '';
        //Two's Comp
        for(each in value2){
            
            if(value2[each] == '0' || value2[each] == 0 ){
                tmp += '1';
            }else if(value2[each] == '1' || value2[each] == 1){
                tmp += '0';
            }
        }
        value2 = ~tmp;
    }else
        value2 = BinaryToDecimal(value2);
    
    var total = value1 + value2;
    total = DecimalToBinary(total);
    while(tmpLength > total.length){
        total = '0'+total;
    }
    return total;
}

function sub(value1, value2){
    var tmpLength = value1.length;
	if(value1.length > value2.length)
		tmpLength = value1.length;
	else
		tmpLength = value2.length;
	value1 = BinaryToDecimal(value1);
    value2 = BinaryToDecimal(value2);
    var total = value1 - value2;
	total = DecimalToBinary(total);
	while(tmpLength > total.length){
		total = '0'+total;
	}
    return total;
}

//var tmp = sub('000100', DecimalToBinary(1));
//console.log('Tmp: '+tmp);

 

