<pre><?php
echo "Reception des données... <br>";

if(!empty($_POST)){
	print_r($_POST);

	$validForm = true;

	foreach ($_POST as $key => $value) {
			# code...
		if(substr($key, 0, 6) == "slider"){
			// echo $value."<br>";
			$valueCheck = false;{


				if($value >=1 && $value <=100){
					$valueCheck = true;
				}
				else{
					$valueCheck = false;
					break;
				}
			}
			// echo $valueCheck;
			// echo $value."<br>";
			if($valueCheck == true){
				$tag = 0;

				if ($value > 0 && $value <= 20) {
					$tag = 1;
				}
				else if($value >=20 && $value <= 40){
					$tag = 2;
				}
				else if($value >=40 && $value <= 60){
					$tag = 3;
				}
				else if($value >=60 && $value <= 80){
					$tag = 4;
				}
				else if($value >=80 && $value <= 100){
					$tag = 5;
				}
				else{
					echo "Mauvaise valeur";
				}
				$_POST[$key] = $tag;

			}
		}

	}
	if(($_POST['meteo_int'])== 0){
		$validForm = false;
		$erreur[] = "meteo";
		echo "Valeur meteo incorrecte";
	} else if (($_POST['meteo_int'])== 1) {
		$validForm = true;
		echo "Meteo à 1/4";
	} else if (($_POST['meteo_int'])== 2) {
		$validForm = true;
		echo "Meteo à 2/4";
	} else if (($_POST['meteo_int'])== 3) {
		$validForm = true;
		echo "Meteo à 3/4";
	} else if (($_POST['meteo_int'])== 4) {
		$validForm = true;
		echo "Meteo à 4/4";
	} else {
		$validForm = false;
	}

	echo("<br />...Données Récuperées <br/>");
	print_r($_POST);
	

	// 	$value = $_POST[]
	// 			$lvalue = count($value);
	// 			for ($i = 0; i < $lvalue; i++){
	// 				print_r($value[i].value);
	// 				if($value[i].value >=1 && $value[i].value <=100){
	// 					$valueCheck = true;
	// 					print_r($valueCheck);
	// 				}
	// 				else{
	// 					$valueCheck = false;
	// 					print_r($valueCheck);
	// 					break;
	// 				}
	// 			}
	// if($validForm){
	// 	echo "Well done";
	// } else{
	// 	header("Location: indevalue.html?erreur".implode("-", $erreur));
	// }
} else {
	header("Location: index.html");
}
?>
</pre>
