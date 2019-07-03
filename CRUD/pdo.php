<?php

try {
	$bdd = new PDO ('mysql:host=localhost;dbname=crud;charset=utf8', 'root', '');
	$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
	echo "Connection failed: " . $e->getMessage() . "<br>";
}