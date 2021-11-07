
<?php 

	$host = "localhost";
	$dbuser = "root";
	$dbpass = "";
	$dbname = "product_db";

	function getConnection(){
		global $host;
		global $dbname;
		global $dbbuying_price;
		global $dbselling_price;

		$con = mysqli_connect($host, $dbselling_price, $dbbuying_price, $dbname);
		return $con;
	}
	

?>