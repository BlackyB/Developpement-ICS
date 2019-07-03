<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset=utf-8>
	<meta name=description content="">
	<meta name=viewport content="width=device-width, initial-scale=1">
	<title>BDD Jeu</title>
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<section class="w-100">
		<section class="col align-center">
			<input id="create" class="m-auto w-25" type="button" name="create" value="Ajouter un nouveau Jeu">
			<form action="add.php" method="POST" id="formulaire" class="none m-auto w-25">
				<div class="col">
					<div class="row justify-between">
						<label for="nom">Nom</label>
						<input id="nom" type="text" name="Nom" placeholder="Nom">
					</div>
					<div class="row justify-between">
						<label for="prix">Prix</label>
						<input id="prix" type="number" name="Prix" placeholder="Prix">
					</div>
					<div id="check" class="row wrap justify-between">
						<label for="ps3">PS3
							<input id="ps3" type="checkbox" name="Plateforme[]" value="1">
						</label>
						<label for="xbox360">XBOX 360
							<input id="xbox360" type="checkbox" name="Plateforme[]" value="2">
						</label>
						<label for="ps2">PS2
							<input id="ps2" type="checkbox" name="Plateforme[]" value="3">
						</label>
						<label for="ps1">PS1
							<input id="ps1" type="checkbox" name="Plateforme[]" value="4">
						</label>
						<label for="xbox">XBOX
							<input id="xbox" type="checkbox" name="Plateforme[]" value="5">
						</label>
						<label for="ps4">PS4
							<input id="ps4" type="checkbox" name="Plateforme[]" value="6">
						</label>
						<label for="xboxOne">XBOX ONE
							<input id="xboxOne" type="checkbox" name="Plateforme[]" value="7">
						</label>
						<label for="pc">PC
							<input id="pc" type="checkbox" name="Plateforme[]" value="8">
						</label>
						<label for="wii">Wii
							<input id="wii" type="checkbox" name="Plateforme[]" value="9">
						</label>
						<label for="wiiU">Wii U
							<input id="wiiU" type="checkbox" name="Plateforme[]" value="10">
						</label>
						<label for="switch">Switch
							<input id="switch" type="checkbox" name="Plateforme[]" value="11">
						</label>
						<label for="gamecube">GameCube
							<input id="gamecube" type="checkbox" name="Plateforme[]" value="12">
						</label>
						<label for="ds">DS
							<input id="ds" type="checkbox" name="Plateforme[]" value="13">
						</label>
						<label for="3DS">3DS
							<input id="3DS" type="checkbox" name="Plateforme[]" value="14">
						</label>
						<label for="psp">PSP
							<input id="psp" type="checkbox" name="Plateforme[]" value="15">
						</label>
						<label for="gameboy">GameBoy
							<input id="gameboy" type="checkbox" name="Plateforme[]" value="16">
						</label>
						<label for="gameboyColor">GameBoy Color
							<input id="gameboyColor" type="checkbox" name="Plateforme[]" value="17">
						</label>
						<label for="gameboyAdvance">GameBoy Advance
							<input id="gameboyAdvance" type="checkbox" name="Plateforme[]" value="14">
						</label>
					</div>
					<div class="row justify-between">
						<label for="genre">Genre</label>
						<select id="genre" name="Genre"> 
							<option value="1">Action/Aventure</option>
							<option value="2">Sport</option>
							<option value="3">FPS</option>
							<option value="4">RPG</option>
							<option value="5">Course</option>
							<option value="6">Indé</option>
							<option value="7">Plateforme</option>
							<option value="8">Gestion/Wargame</option>
							<option value="9">Jeu de Société</option>
							<option value="10">Combat</option>
							<option value="11">Simulation</option>
							<option value="12">MMO</option>
						</select>
					</div>
					<div class="row justify-between">
						<label for="date">Date de sortie</label>
						<input id="date" type="date" name="Sortie">
					</div>
					<div class="row justify-between">
						<label for="connexion">Connexion</label>
						<select id="connexion" name="Connexion">
							<option value="1">Oui</option>
							<option value="0">Non</option>
						</select>
					</div>
				</div>
				<input type="submit" name="">
			</form>
		</section>
<!-- 		<section>
			<form action="genre.php" method="POST" id="sortBy">
				<select id="sortByGenre" name="GenreTri"> 
					<option value="1">Action/Aventure</option>
					<option value="2">Sport</option>
					<option value="3">FPS</option>
					<option value="4">RPG</option>
					<option value="5">Course</option>
					<option value="6">Indé</option>
					<option value="7">Plateforme</option>
					<option value="8">Gestion/Wargame</option>
					<option value="9">Jeu de Société</option>
					<option value="10">Combat</option>
					<option value="11">Simulation</option>
					<option value="12">MMO</option>
				</select>
			</form>
		</section> -->
		<table id="myTable" class="w-100 justify-around">
			<thead>
				<th>Jeu</th>
				<th>Prix</th>
				<th>Plateforme</th>
				<th>Genre</th>
				<th>Date de Sortie</th>
				<th>Connexion</th>
				<th>Modifier</th>
			</thead>
			<tbody>
				<?php include 'showAll.php';?>
			</tbody>

		</table>
	</section>
	<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.18/b-1.5.6/datatables.js"></script>
	<script type="text/javascript" src="script.js"></script>
</body>
</html>