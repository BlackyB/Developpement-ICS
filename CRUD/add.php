<?php

require 'pdo.php';
$requete = $bdd->prepare('INSERT INTO jeu (jeu_Nom, jeu_Prix, jeu_Genre, jeu_Sortie, jeu_Connexion) VALUES (:Nom, :Prix, :Genre, :Sortie, :Connexion)');
$requete->bindValue(":Nom", $_POST["Nom"]);
$requete->bindValue(":Prix", $_POST["Prix"]);
$requete->bindValue(":Genre", $_POST["Genre"]);
$requete->bindValue(":Sortie", $_POST["Sortie"]);
$requete->bindValue(":Connexion", $_POST["Connexion"]);
$requete->execute();

$lastId = $bdd->lastInsertId();

for ($i=0; $i < sizeof($_POST["Plateforme"]); $i++) { 
	$requete = $bdd->prepare('INSERT INTO jeu_plateforme (jp_Id_Jeu, jp_Id_Plateforme) VALUES (:jeu, :plateforme)');
	$requete->bindValue(":jeu", $lastId);
	$requete->bindValue(":plateforme", $_POST["Plateforme"][$i]);
	$requete->execute();
}

header("Location: index.php");
