<?php

require 'pdo.php';

$requete = $bdd->prepare('SELECT jeu_Id, jeu_Nom, jeu_Prix, genre_Nom, jeu_Sortie, jeu_Connexion FROM jeu JOIN genre ON jeu.jeu_genre=genre.genre_Id');

$result = $requete->execute();
$row = $requete->rowCount();

for ($i=0; $i < $row; $i++) { 

	$resultLigne = $requete->fetch(PDO::FETCH_ASSOC);
	echo "<tr>";

	$plate = $bdd->prepare('SELECT plateforme_Nom FROM plateforme JOIN jeu_plateforme ON (plateforme.plateforme_Id=jeu_plateforme.jp_Id_Plateforme) WHERE jeu_plateforme.jp_Id_Jeu = ?');
	$plate->execute([$resultLigne["jeu_Id"]]);

	$plateformes = [];

	while($resultPlate = $plate->fetch()){
		$plateformes[] = $resultPlate['plateforme_Nom'];
	}
	echo "<td>". $resultLigne["jeu_Nom"] ."</td>";
	echo "<td>". $resultLigne["jeu_Prix"] ."</td>";
	echo "<td>". implode(" / " , $plateformes) ."</td>";
	echo "<td>". $resultLigne["genre_Nom"] ."</td>";
	echo "<td>". $resultLigne["jeu_Sortie"] ."</td>";
	echo "<td>". $resultLigne["jeu_Connexion"] ."</td>";
	echo "<form action='delete.php' method='POST'><input type='hidden' name='target' value=" . $resultLigne["jeu_Id"] . ">";
	echo "<td>" . "<input type='submit' name='trigger' value='Ajouter'>" . "<input type='submit' name='trigger' value='Modifier'>" . "<input type='submit' name='trigger' value='Supprimer'>" . "</td>";
	echo "</form>";
	echo "</tr>";
}
