<?php 

	if(isset($_REQUEST['submit']))
	{
		$date = $_REQUEST['date'];
		echo $date;
	}

?>


<html>
<head>
	<title>DOBForm</title>
</head>
<body>
	<form method="post" >
		Date Of Birth <input type="date" name="date" value=""/>
		<input type="submit" name="submit" value="Submit">
	</form>
</body>
</html>