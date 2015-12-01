var html = "";
var cycle = 1;
var fetchDecode = null;
var decodeExecute = null;
var executeMemory = null;
var memoryWrite = null;

var stalls = 0;

var pipeline = [];
    pipeline['fetch'] = null;
    pipeline['decode'] = null;
    pipeline['execute'] = null;
    pipeline['memory'] = null;
    pipeline['write'] = null;


/*
setInterval(function(){ 
    fetch();
    decode(fetchDecode);
    executeStage(decodeExecute);
    memoryStage();
    writeBackStage();
}, 3000);  
*/
attempt = 0;
function autoPipe(){
	document.getElementById('autoBtn').disable = true;
	var clock = setInterval(function (){
		pipe();
		if(!(instrRegister.hasOwnProperty(PC))){
			if(attempt > 2){
				alert('Attempt :'+attempt);
				clearInterval(clock);	
			}else
				attempt++;
		}else{
			attempt = 0;
		}
	}, 1000);
	console.log('*****************'+PC+'*************************');
	console.log(instrRegister);
	
}

function pipe(){
    html = "";
    html += '<li class="';
    if(cycle == 1)
        html += 'active'
    html += '"><a href="#cycle'+cycle+'" role="tab" data-toggle="tab">Cycle #'+cycle+'</a></li>';
    document.getElementById('tabs').innerHTML += html;
    html = "";
    html += '<div class="tab-pane ';
    if(cycle == 1)
        html += 'active'
    html += '" id="cycle'+cycle+'">';
    console.log('=====================================');
    console.log('=====================================');
    console.log('=====================================');
	console.log('FileRegister: ');
	console.log(fileRegister);
    console.log('Fetch/Decode: '+ fetchDecode);
    console.log('Decode/Execute: ');
    console.log(decodeExecute);
    console.log('Execute/Memory: ');
    console.log(executeMemory);
    console.log('Memory/WriteBack: ');
    console.log(memoryWrite);
    /*fetch();
    decode(fetchDecode);
    executeStage();
    memoryStage();
    writeBackStage();
    */
    writeBackStage();
    memoryStage();
    executeStage();
	decode(fetchDecode);
	if(stalls == 0){
		fetch();
	}
    html += '</div>';
    document.getElementById('panes').innerHTML += html;
    cycle++;
}

function executeStage(){
    executeMemory = [];
    console.log('============== Execute ===================');
   
	
    var tmp = '';
    try{
        if(decodeExecute['address'] != null){
			html += '<h1 align="center">~~~ Execute ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
			html += '<h4>Jumping to Address : '+decodeExecute['address']+'</h4>';
			html += '</div>';
            jmp(decodeExecute['address']);
			return;
        }
    }catch(e){}
    try{
        tmp = decodeExecute['func']+"('"+decodeExecute['rd']+"','"
                +decodeExecute['rs']+"','"
                +decodeExecute['rt']+"');";
        eval(tmp);
    }catch(e){}
}
    
function memoryStage(){
    memoryWrite = [];
    console.log('============== Memory ===================');
    try{
        if(executeMemory['type'].length)
            switch(executeMemory['type']){
                case 'sw':
                    memRegister[executeMemory['memAddress']] = fileRegister[executeMemory['fileAddres']];
                    console.log("Saving ("+fileRegister[executeMemory['fileAddres']]+") to "+executeMemory['memAddress']);
                    
					html += '<h1 align="center">~~~ Memory ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
						html += '<h4>Saving (['+fileRegister[executeMemory['fileAddres']]+']) to (['+executeMemory['memAddress']+']) </h4>';
						html += '</div>';
					
					memoryWrite['finish'] = true;
                    memoryWrite['address'] = null;
                    memoryWrite['value'] = null;
                    memoryWrite['type'] = null;
                    memoryWrite['rd'] = null;
                    break;
                case 'lw':
                    console.log("Loading ("+memRegister[executeMemory['memAddress']]+") to "+executeMemory['fileAddres']);
                    
					html += '<h1 align="center">~~~ Memory ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
						html += '<h4>Loading (['+memRegister[executeMemory['memAddress']]+']) to (['+executeMemory['fileAddres']+']) </h4>';
						html += '</div>';
					
					memoryWrite['finish'] = false;
                    memoryWrite['address'] = null;
                    memoryWrite['value'] = memRegister[executeMemory['memAddress']];
                    memoryWrite['type'] = 'lw';
                    memoryWrite['rd'] = executeMemory['fileAddres'];
                    break;
				case 'jmp':
					fetchDecode = null;
					decodeExecute = null;
					console.log('Jumping to address['+executeMemory['address']+']');
					
					html += '<h1 align="center">~~~ Memory ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
						html += '<h4>Jumping to address(['+executeMemory['address']+'])</h4>';
						html += '</div>';
					
					PC = sub(executeMemory['address'], '000001');
					break;
            }
    }catch(e){}
    
    try{
        var tm = memoryWrite['rd'].length;
        
		if(executeMemory['value']){
			memoryWrite['finish'] = false;
			memoryWrite['address'] = null;
			memoryWrite['value'] = executeMemory['value'];
			memoryWrite['type'] = null;
			memoryWrite['rd'] = executeMemory['rd'];
			console.log("Sending (value: "+executeMemory['value']+", rd: "+executeMemory['rd']+')');
			
			html += '<h1 align="center">~~~ Memory ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
			html += '<h4>Sending (value: '+executeMemory['value']+', rd: ['+executeMemory['rd']+'])</h4>';
			html += '</div>';
			
		}
    }catch(e){}
    
    try{
        var tm = memoryWrite['address'].length;
        
        memoryWrite['finish'] = false;
        memoryWrite['address'] = executeMemory['address'];
        memoryWrite['value'] = null;
        memoryWrite['type'] = executeMemory['type'];
        memoryWrite['rd'] = null;
        console.log("Sending (address: "+executeMemory['address']+", type: "+executeMemory['type']+')');
		
		html += '<h1 align="center">~~~ Memory ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
			html += '<h4>Sending (address: ['+executeMemory['address']+'], type: '+executeMemory['type']+')</h4>';
			html += '</div>';
		
		
    }catch(e){}
}


function writeBackStage(){
    console.log('============== W/B ===================');
    try{
        if(memoryWrite['finish']){
            console.log('Nothing to do..');
            
			html += '<h1 align="center">~~~ Write Back ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
				html += '<h4>Nothing to do..</h4>';
				html += '</div>';
			
			return;
        }
        if(memoryWrite['value'] && memoryWrite['rd']){
            console.log('Setting: memValue['+memoryWrite['value']+'] into rd['+memoryWrite['rd']+']');
			stalls = 0;
			html += '<h1 align="center">~~~ Write Back ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
				html += '<h4>(Setting: memValue['+memoryWrite['value']+'] into rd['+memoryWrite['rd']+'])</h4>';
				html += '</div>';
			
            fileRegister[memoryWrite['rd']] = memoryWrite['value'];
			console.log(fileRegister);
        }
        if(memoryWrite['type'] == 'jmp'){
            console.log('Setting:  address['+memoryWrite['address']+'] - 1 to PC');
            
			html += '<h1 align="center">~~~ Write Back ~~~</h1><div align="center" style="padding-top: 10px; padding-left: 100px; padding-right: 100px;">';
				html += '<h4>(Setting:  address['+memoryWrite['address']+'] - 1 to PC)</h4>';
				html += '</div>';
			
			//Set PC Address
	        PC = memoryWrite['address'];
	        //Move PC Back One
	        PC = sub(memoryWrite['address'],DecimalToBinary(1));
			console.log(fileRegister);
        }
    }catch(e){}
}
