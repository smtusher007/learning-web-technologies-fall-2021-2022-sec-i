<?php 
	include('header.php');
	require_once('../model/usersModel.php');
	$user = $_POST['username'];
	$id = $_POST['id'];
	$result = editUser($user,$id);
	$count = mysqli_num_rows($result);
	
	

	/*for($i=1; $i<=$count; $i++){
		$data = mysqli_fetch_assoc($result);
		print_r($data);
		echo "<br>";
	}*/

?>

<<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
		<form method="post" action="edit.php">
			<input type="text" name="id" value="">Enter a ID<br>
			<input type="text" name="username" value="">Update username<br>
			<input type="submit" name="submit" value="Update">
		</form>
</body>
</html>
