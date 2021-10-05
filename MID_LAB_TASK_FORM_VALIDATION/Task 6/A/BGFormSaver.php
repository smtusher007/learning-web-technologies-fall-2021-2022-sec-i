<?php 

	if (empty($_REQUEST["blood_group"]))
	  {
	    $blood_grouperr = "Blood Groupe is required";
	  }
	   else
	    {
	    $blood_group = test_input($_POST["blood_group"]);
	    }

?>