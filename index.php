<html>
	<head>
	    <link rel="stylesheet" type="text/css" href="lib/css/bootstrap.css">
	    <link rel="stylesheet" type="text/css" href="lib/css/bootstrap.min.css">
	    <link rel="stylesheet" type="text/css" href="lib/css/bootstrap-theme.css">
	    <link rel="stylesheet" type="text/css" href="lib/css/bootstrap-theme.min.css">
	    
	    <script type="text/javascript" src="lib/js/jquery.js"></script>
	    <script type="text/javascript" src="lib/js/bootstrap.js"></script>
	    <script type="text/javascript" src="lib/js/bootstrap.min.js"></script>
	    
	    <!-- Custom Libraries -->
	    <script type="text/javascript" src="javascript/conversion.js"></script>
	    <script type="text/javascript" src="javascript/control.js"></script>
	    <script type="text/javascript" src="javascript/execute.js"></script>
	    <script type="text/javascript" src="javascript/ALU_functions.js"></script>
	    <script type="text/javascript" src="javascript/registers/instruction_registers.js"></script>
	    <script type="text/javascript" src="javascript/registers/file_registers.js"></script>
	    <script type="text/javascript" src="javascript/registers/mem_registers.js"></script>
	</head>
	<body>
	    
		<div class="page-header" style="margin-left: 5px">
		    <h1 align="center" class="jumbotron">Team Druid</h1>
		    <div align="center" style="margin-top: -10px;">
		        <button class="btn btn-primary" style=" margin-bottom: 5px;" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Show Registers
                </button>
                <div class="collapse" id="collapseExample">
                  <div class="well">
                    <table class="table" width="100%">
                        <tr>
                            <th>Index</th> <th>Variable</th> <th>Content</th>
                        </tr>
                        <tr>
							<td>001</td> <td>$v0</td> <td><input id="v0Reg" type="text" placeholder="Value" onkeyup="fileRegister['001'] = this.value;" /></td>
						</tr>
						<tr>
							<td>010</td> <td>$v1</td> <td><input id="v1Reg" type="text" placeholder="Value" onkeyup="fileRegister['010'] = this.value;" /></td>
						</tr>
						<tr>
							<td>011</td> <td>$v2</td> <td><input id="v2Reg" type="text" placeholder="Value" onkeyup="fileRegister['011'] = this.value;" /></td>
						</tr>
						<tr>
							<td>100</td> <td>$v3</td> <td><input id="v3Reg" type="text" placeholder="Value" onkeyup="fileRegister['100'] = this.value;" /></td>
						</tr>
						<tr>
							<td>101</td> <td>$t0</td> <td><input id="t0Reg" type="text" placeholder="Value" onkeyup="fileRegister['101'] = this.value;" /></td>
						</tr>
						<tr>
							<td>110</td> <td>$t1</td> <td><input id="t1Reg" type="text" placeholder="Value" onkeyup="fileRegister['110'] = this.value;" /></td>
						</tr>
						<tr>
							<td>111</td> <td>$t2</td> <td><input id="t2Reg" type="text" placeholder="Value" onkeyup="fileRegister['111'] = this.value;" /></td>
						</tr>
						<tr>
							<td>000</td> <td>$a0</td> <td><input id="a0Reg" type="text" placeholder="Value" onkeyup="memRegister['000'] = this.value;" /></td>
						</tr>
						<tr>
							<td>001</td> <td>$a1</td> <td><input id="a1Reg" type="text" placeholder="Value" onkeyup="memRegister['001'] = this.value;" /></td>
						</tr>
						<tr>
							<td>010</td> <td>$a2</td> <td><input id="a2Reg" type="text" placeholder="Value" onkeyup="memRegister['010'] = this.value;" /></td>
						</tr>
						<tr>
							<td>011</td> <td>$a3</td> <td><input id="a3Reg" type="text" placeholder="Value" onkeyup="memRegister['011'] = this.value;" /></td>
						</tr>
                    </table>
                  </div>
                </div>
                <button class="btn btn-primary" style=" margin-bottom: 5px;" type="button" onclick="fetch();">
                    Execute
                </button>
            </div>
        </div>
    </body>
</html>
