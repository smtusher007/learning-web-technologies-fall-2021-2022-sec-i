<?php 

	$name = $_REQUEST['name'];
	$bp = $_REQUEST['bp'];
	$sp = $_REQUEST['sp'];
	$products = addProducts($products);
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Add Prodcts</title>
</head>
<body>


 <form method="post" action="">
 	Name<br>
 	<input type="text" name="name" value=""><br>
 	Buying Price<br>
 	<input type="text" name="bp" value=""><br>
 	Selling Price<br>
 	<input type="text" name="sp" value=""><br>
 	<input type="submit" name="save" value="save">
 </form> 

	
</body>
</html>