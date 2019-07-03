<?php

require 'pdo.php';

switch ($_POST["trigger"]) {
	case 'Supprimer':

	$requete = $bdd->prepare('DELETE FROM jeu_plateforme WHERE jp_Id_Jeu =' . $_POST["target"].'; DELETE FROM jeu WHERE jeu.jeu_Id =' . $_POST["target"]);
	$requete->execute();
	header("Location: index.php?delete");

	break;

	case 'Ajouter':

	// $requete = $bdd->prepare('INSERT INTO jeu_plateforme (jp_Id_Jeu, jp_Id_Plateforme) VALUES (:jeu, :plateforme');
	// $requete->bindValue(":jeu", $_POST["trigger"]);
	// $requete->bindValue(":plateforme", $_POST["plateforme"]);

	break;

	case "Modifier":

	break;
	
	default:
		# code...
	break;
}