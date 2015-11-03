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
						    <td>000</td> <td>$zero</td> <td><input type="text" placeholder="Value" /></td>
							<td>001</td> <td>$v0</td> <td><input type="text" placeholder="Value" /></td>
							<td>010</td> <td>$v1</td> <td><input type="text" placeholder="Value" /></td>
							<td>011</td> <td>$v2</td> <td><input type="text" placeholder="Value" /></td>
							<td>100</td> <td>$v3</td> <td><input type="text" placeholder="Value" /></td>
							<td>101</td> <td>$t0</td> <td><input type="text" placeholder="Value" /></td>
							<td>110</td> <td>$t1</td> <td><input type="text" placeholder="Value" /></td>
							<td>111</td> <td>$t2</td> <td><input type="text" placeholder="Value" /></td>
							<td>000</td> <td>$a0</td> <td><input type="text" placeholder="Value" /></td>
							<td>001</td> <td>$a1</td> <td><input type="text" placeholder="Value" /></td>
							<td>010</td> <td>$a2</td> <td><input type="text" placeholder="Value" /></td>
							<td>011</td> <td>$a3</td> <td><input type="text" placeholder="Value" /></td>
                        </tr>
                    </table>
                  </div>
                </div>
            </div>
		    
		    <h3>R-Type(16bit)<small> Custom</small></h3>
		    <h3>I-Type(16bit)<small> Custom</small></h3>
		    <h3>J-Type(16bit)<small> Custom</small></h3>
        </div>
    </body>
</html>
