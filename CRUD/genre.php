<?php

require 'pdo.php';

$requete = $bdd->prepare('SELECT * FROM jeu INNER JOIN genre ON jeu.jeu_Id=genre.genre_Id WHERE genre_id = :Genre');

$requete->bindValue(":Genre" , $_POST["GenreTri"]);
$requete->execute();
$row = $requete->rowCount();

for ($i=0; $i < $row; $i++) { 
	$resultLigne = $requete->fetch(PDO::FETCH_ASSOC);
	echo("<tr>");
	foreach($resultLigne as $ligne){
		echo "<td>".$ligne."</td>";
		echo ("\n");
	}
	echo "</tr>";
}

header ("Location: index.php?sortBy=".$_POST["Genre"]);