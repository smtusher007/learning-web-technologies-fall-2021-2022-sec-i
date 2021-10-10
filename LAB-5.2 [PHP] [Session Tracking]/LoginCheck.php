<?php 
	session_start();

	if(isset($_POST['submit'])){

		$username 	= $_POST['username'];
		$password 	= $_POST['password'];

		if($username != ""){
			if($password != ""){
				
				if($username == $_COOKIE['username'] && $password == $_COOKIE['password']){
						//$_SESSION['flag'] = 'true';
					setcookie('flag', 'true', time()+3600, '/');
						header('location: welcome.php');
				}else{
					echo "User name or password may be invalid";
				}	

			}else{
				echo "Invalid password";
			}
		}else{
			echo "invalid username";
		}
	}
?>