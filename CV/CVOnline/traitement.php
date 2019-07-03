<?php

if (isset($_POST) && !empty($_POST)){
	// Compteur Erreur
	$error = 0;

	// Passe dans chaque index de la BDD
	foreach ($_POST as $key => $value) {

		// Si la valeur est nulle, inscrit "CHAMP VIDE" dans la BDD
		if(empty($value)){
			$error++;
		}

		// Check Nom et Sujet < 3 caractères
		else if (($key == "Nom" && !preg_match("/^([a-zA-Z \-\'éèùà]{3,}){?}*$/", $value)) || ($key == "Sujet" && !preg_match("/^((([\S]+)(\s)*){1,})*$/", $value))) {
			$error++;

		// Check Email invalide
		} else if ($key == "Email" && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
			$error++;

		// Check Message < 10 mots
		} else if ($key == "Message" && !preg_match("/^((([\S]+)(\s)+){9})((([\S]+)(\s)*){1,})$/m", $value)) {
			$error++;

		// Sinon écrit la valeur brute dans la BDD
		} else {
			
		}
	}
	// Renvoi vers message d'erreur
	if ($error > 0 ){
		header("Location: index.php?submit=error");
	// Renvoi vers message de validation
	} else {
		try {
			$conn_pdo = new PDO("mysql:host=localhost; dbname=cvsql;charset=utf8", "root", "");
			$conn_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch(PDOException $e) {
			echo "Connection failed: " . $e->getMessage() . "<br>";
		}
		$sql =$conn_pdo->prepare('INSERT INTO contact (SubmitDate, Nom, Email, Sujet, Message) VALUES (NOW(), :Nom, :Email, :Sujet, :Message)'); 

		foreach ($_POST as $key => $value) {
			$sql->bindValue(':'.$key, $value );
		}
		$requete = $sql->execute();

		$to_email = 'bari.jonathan@live.fr';
		$subject = 'Envoi de formulaire de contact';
		$message = 'Un nouveau formulaire de contact a été envoyé';
		mail($to_email,$subject,$message);
		header("Location: index.php?submit=success");
	}
}
