<?php

// for ($i=1; $i < 15000; $i+=2) { 
// 	echo $i . "<br/>";
// }

// echo ("<br/>");

// for ($i=0; $i < 500; $i++) { 
// 	echo ($i . " Je dois faire des sauvegardes régulières de mes fichiers.") . "<br/>";
// }

// echo ("<br/>");

// for ($i=0; $i < 14; $i++) { 
// 	echo ($i * 13) . "<br/>";
// }

// echo ("<br/>");

// $tampon = 1;
// for ($i=1; $i < 31; $i++) { 
// 	$tampon = $tampon * $i;
// 	echo ($tampon) . "<br/>";
// }

// echo ("<br/>");

// for ($i=0; $i < 4 ; $i++) { 
// 	echo ("12345678910111213") . "<br/>";
// }

// echo ("<br/>");

// function multiplication($nombre, $multiple){
// 	echo "<table><thead><tr><th colspan=". ($multiple + 2) . "> Multiplication jusqu'à " . $multiple . "</th></tr></thead><tbody><tr></tr>";			echo ("<tr><th></th>");
// 	for ($i=0; $i < $multiple + 1; $i++) { 
// 		echo ("<th>" . $i . "</th>");	
// 	}
// 	for ($nb=0; $nb < $nombre + 1; $nb++) { 
// 		echo ("<tr><th>" . $nb . "</th>");
// 		for ($i=0; $i < $multiple + 1; $i++) { 
// 			echo ("<td>" . $i * $nb . "</td>");
// 		}
// 		echo("</tr>");
// 	} 

// 	echo "</tr></tbody></table>";
// }

// multiplication(12, 12);

// echo("<br/>");

// function sapin ($largeur, $hauteur){
// 	for ($h=0; $h < $hauteur; $h++) { 
// 		for ($l=1 ; $l < $largeur + ($h * 2) ; $l++ ) { 
// 			for ($branche=0; $branche < $l; $branche++) { 
// 				echo "<span>*</span>";
// 			}
// 			// $largeur += 2;
// 			echo("<br/>");
// 		}
// 	}
// }

// sapin(1,6);

// echo "<br/>";

// function cadre ($largeur, $hauteur){
// 	for ($h=0; $h < $hauteur + 1 ; $h++) { 
// 		if ($h == 0 || $h == $hauteur) {
// 			for ($bord=0; $bord < $largeur; $bord++) { 
// 				echo "<span>*</span>";
// 			}
// 		} else {
// 			for ($bord=0; $bord < $largeur; $bord++) { 
// 				if ($bord == 0 || $bord == $largeur - 1){
// 					echo "<span>*</span>";
// 				} else {
// 					echo "<span class=hidden>*</span>";
// 				}
// 			}
// 		}
// 		echo "<br/>";
// 	}
// }

// cadre(10, 10);

if (!empty($_GET) && isset($_GET)) {
	foreach ($_GET as $key => $value) {
		if ($key == "userSentence") {
			$count = strlen($value);
			echo $count . " caractères passés en argument";
		} else if ($key == "toCaps"){
			$message = explode(" ", $value);
			for ($i=0; $i < sizeof($message); $i++) {
				$maj = strtoupper(substr($message[$i], 0, 1));
				$reste = substr($message[$i], 1, strlen($message[$i])) . " ";
				$total = $maj . $reste;
				echo $total; 
			}
		}
	}
}

?>