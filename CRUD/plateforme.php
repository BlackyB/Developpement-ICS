<?php

require 'pdo.php';

$requete = $bdd->prepare('SELECT * FROM jeu WHERE Plateforme == :Plateforme');

$requete->bindValue(":Plateforme", $_POST["Plateforme"]);

$requete->execute();