var jeu = ["ANGLE", "ARMOIRE", "BANC", "BUREAU", "CABINET", "CARREAU", "CHAISE", "CLASSE", "CLEF", "COIN", "COULOIR", "DOSSIER", "EAU", "ECOLE", "ENTRER", "ESCALIER", "ETAGERE", "EXTERIEUR", "FENETRE", "INTERIEUR", "LAVABO", "LIT", "MARCHE", "MATELAS", "MATERNELLE", "MEUBLE", "MOUSSE", "MUR", "PELUCHE", "PLACARD", "PLAFOND", "PORTE", "POUBELLE", "RADIATEUR", "RAMPE", "RIDEAU", "ROBINET", "SALLE", "SALON", "SERRURE", "SERVIETTE", "SIEGE", "SIESTE", "SILENCE", "SOL", "SOMMEIL", "SONNETTE", "SORTIE", "TABLE", "TABLEAU", "TABOURET", "TAPIS", "TIROIR", "TOILETTE", "VITRE", "ALLER", "AMENER", "APPORTER", "APPUYER", "ATTENDRE", "BAILLER", "COUCHER", "DORMIR", "ECLAIRER", "EMMENER", "EMPORTER", "ENTRER", "FERMER", "FRAPPER", "INSTALLER", "LEVER", "OUVRIR", "PRESSER", "RECHAUFFER", "RESTER", "SONNER", "SORTIR", "VENIR", "ABSENT", "ASSIS", "BAS", "HAUT", "PRESENT", "GAUCHE", "DROITE", "DEBOUT", "DEDANS"]
var inputUser = document.getElementById("text");
var envoiProp = document.getElementById("envoiProp");
var inputLettre = document.getElementById("inputLettre");
var envoiLettre = document.getElementById("envoiLettre");
var affichage = document.getElementById("affichage");
var affichageAlready = document.getElementById("already");
var stickman = ["socle", "poteau", "barre", "diag", "corde", "tete", "corps", "brasG", "brasD", "jambeG", "jambeD"];
var wrong = 0;
var correct = 0;
var success = 0;
var pick;
var trouve;
var lettres = []
var show = [];
var already = [];
var progress = document.getElementById("jauge");
var r = 2.5;
var t = 0;
var check;
var checkBras;
var audio = new Audio('cloche.mp3');
var titre = document.getElementById("titre");
var dead = document.getElementById('dead');
var bonhomme = document.getElementById('bonhomme');
var corde = document.getElementById('corde');
var brasG = document.getElementById('brasG');
var restart1 = document.getElementById('restart1');
var restart2 = document.getElementById('restart2');

var init = function(){
	audio.pause();
	document.getElementById("text").value = "";
	envoiLettre.removeAttribute("disabled", "disabled");
	envoiProp.removeAttribute("disabled", "disabled");
	jauge.value = 11;
	wrong = 0;
	correct = 0;
	success = 0;
	lettres = []
	show = [];
	already = [];
	progress.style.opacity = "1";
	inputLettre.style.opacity = "1";
	inputUser.style.opacity = "1";
	envoiLettre.style.opacity = "1";
	envoiProp.style.opacity = "1";
	corde.style.opacity = "0";
	document.body.style.backgroundColor = "white";
	titre.style.color = "black";
	dead.style.opacity = "0";
	restart1.style.opacity = "1";
	restart2.style.opacity = "0";
	for (var i = 0; i < stickman.length; i++) {
		document.getElementById(stickman[i]).style.opacity = "0";
		document.getElementById(stickman[i]).style.backgroundColor = "black";
	}
	pick = (Math.floor((Math.random()*jeu.length) + 1))
	trouve = jeu[pick];
	for (var i = 0; i < trouve.length; i++) {
		lettres.push(trouve.slice(0 + i, 1 + i));
		show.push(" _ ");
	}
	affichage.innerText = show;
	affichageAlready.innerText = already;
	console.log(lettres);
}

var testLettre = function(){
	already.push(inputLettre.value);
	for (var j = 0; j < lettres.length; j++) {
		if (inputLettre.value == lettres[j]){
			show[j] = lettres[j];
			lettres[j] = "0";
			correct++;
			success++;
		}
	}
	affichage.innerText = show;
	affichageAlready.innerText = already;
	if (correct == 0) {
		document.getElementById(stickman[wrong]).style.opacity = "1";
		wrong++;
		jauge.value -= 1;
		if (wrong == stickman.length) {
			lose();
		}
	}
	if (success == lettres.length) {
		win();
	}
	correct = 0;
}

var reponse = function(){
	inputUser = document.getElementById("text");
	if (inputUser.value.toString().toUpperCase() === trouve) {
		win();
	} else {
		document.getElementById(stickman[wrong]).style.opacity = "1";
		wrong++;
		jauge.value -= 1;
		if (wrong == stickman.length) {
			lose();
		}
	}
}

var win = function(){
	alert('Félicitations, vous avez gagné ! Le mot à trouver était ' + trouve);
	cut();
	restart1.style.opacity = "0";
	restart2.style.opacity = "1";
}

var lose = function(){
	alert('Vous avez perdu ! Le mot à trouver était ' + trouve);
	envoiLettre.setAttribute("disabled", "disabled");
	envoiProp.setAttribute("disabled", "disabled");
	audio.currentTime=0;
	audio.play();
	for (var i = 0; i < stickman.length; i++) {
		document.getElementById(stickman[i]).style.backgroundColor = "white";
	}
	progress.style.opacity = "0";
	inputLettre.style.opacity = "0";
	inputUser.style.opacity = "0";
	envoiLettre.style.opacity = "0";
	envoiProp.style.opacity = "0";
	document.body.style.backgroundColor = "black";
	titre.style.color = "white";
	dead.style.opacity = "1";
	restart1.style.opacity = "0";
	restart2.style.opacity = "1";
	animation();
}

init();
envoiLettre.addEventListener("click", testLettre);
// document.addEventListener("keydown", function(e){
// 	if(e.key == "Enter" && inputLettre === document.activeElement){
// 		testLettre();
// 	}
// });
envoiProp.addEventListener("click", reponse);
// document.addEventListener("keydown", function(e){
// 	if(e.key == "Enter" && document.getElementById("text") === document.activeElement){
// 		reponse();
// 	}
// });

document.getElementById('restart1').addEventListener("click", init);
document.getElementById('restart2').addEventListener("click", init);

var mouvement = function(){
		bonhomme.style.transform = "rotate(" + r + "deg)";
		if (r == 2.5) {
			check = true;
		}
		if (r == -2.5) {
			check = false;
		}
		if (check == false) {
			r += 0.25;
		}
		if (check == true) {
			r -= 0.25;
		}
	}

var animation = function(){
	setInterval(mouvement, 50);
}

var cut = function() {
	bonhomme.style.transform = "translateY(5.5vh)";
	for (var i = 0; i < stickman.length; i++) {
		document.getElementById(stickman[i]).style.opacity = "1";
	}
	corde.style.opacity = "0";
	setInterval(animationJump, 50);
}

var animationJump = function(){
		bonhomme.style.transform = "translateY(" + t + "vh)";
		if (t == 6) {
			checkBras = true;
		}
		if (t == 0) {
			checkBras = false;
		}
		if (checkBras == false) {
			t += 1;
		}
		if (checkBras == true) {
			t -= 1;
		}
}