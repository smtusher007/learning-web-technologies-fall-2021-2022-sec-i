<?php

	$num1 = 8;
	$num2 = 3;
	$num3 = 2;

	if($num1>$num2 & $num1>$num3)
	{
		echo "First on is the Largest Number: ".$num1;
	}
	elseif ($num2>$num1 & $num2>$num3) 
	{
		echo "Second one is the Largest Number: ".$num2;
	}
	else 
	{
		echo "Third one is the Largest Number: ".$num3;
	}

?>