<!DOCTYPE html>
<html>
<head>
	<meta charset=utf-8>
	<meta name=description content="">
	<meta name=viewport content="width=device-width, initial-scale=1">
	<title>Exercices PHP</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<?php

	include "exercice.php";

	?>
	<form action="exercice.php" method="GET">
		<input type="text" name="userSentence" placeholder="Entrez votre phrase">
		<input type="submit" name="envoi">
	</form>
	<form action="exercice.php" method="GET">
		<input type="text" name="toCaps" placeholder="Entrez votre phrase">
		<input type="submit" name="envoi">
	</form>

</body>
</html>