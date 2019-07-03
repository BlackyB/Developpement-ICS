var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
var jour = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var dateCurrent = new Date();
var joursNb = 0;

// Saut sur la nouvelle date entrée par l'utilisateur
var dateInput = function(){
	var dayInput = document.getElementById('jourInput').value;
	var moisInput = document.getElementById('moisInput').value;
	var anInput = document.getElementById('anInput').value
	
	// Calcul de la nouvelle années à afficher
	if (anInput == "") {
		anInput = dateCurrent.getFullYear();
	} else if (anInput.length != 4){
		alert("Entrer l'année dans le format YYYY. Année utilisée : " + dateCurrent.getFullYear());
		anInput = dateCurrent.getFullYear();
	}
	dateCurrent.setFullYear(anInput);

	// Calcul du nouveau mois à afficher
	if (moisInput == "") {
		moisInput = dateCurrent.getMonth() + 1;
	} else if (Number(moisInput) < 0 || Number(moisInput) > 12) {
		alert("Entrer le mois dans le format MM, de Janvier (1) à Décembre (12). Mois utilisé : " + mois[dateCurrent.getMonth()]);
		moisInput = dateCurrent.getMonth();
	}
	dateCurrent.setMonth(moisInput - 1);
	calculJours();

	// Calcul du nouveau jeu à afficher
	if (dayInput == "") {
		dayInput = dateCurrent.getDate();
	} else if (Number(dayInput) < 0 || Number(dayInput) > joursNb){
		alert("Entrer le jour dans le format DD. Jour utilisé : " + dateCurrent.getDate());
		dayInput = dateCurrent.getDate();
	};
	dateCurrent.setDate(dayInput);
	refresh();
}
// Affichage de la date
var date = function() {
	document.getElementById("jour").innerHTML = jour[dateCurrent.getDay()] + " " + dateCurrent.getDate() + " " + mois[dateCurrent.getMonth()] + " " + dateCurrent.getFullYear();
}
// Affichage de la nouvelle date et géneration du tableau
var refresh = function(){
	spawn();
	date();
}

// Nombre de jours dans le mois
var calculJours = function(){
	if (dateCurrent.getMonth() == 1) {
		if (dateCurrent.getFullYear() % 4 == 0 && dateCurrent.getFullYear() % 100 != 0) {
			joursNb = 29;
		} else if (dateCurrent.getFullYear() % 400 == 0){
			joursNb = 29;
		} else {
			joursNb = 28;
		}
	} else if (dateCurrent.getMonth() == 0 || dateCurrent.getMonth() == 2 || dateCurrent.getMonth() == 4 || dateCurrent.getMonth() == 6 || dateCurrent.getMonth() == 7 || dateCurrent.getMonth() == 9 || dateCurrent.getMonth() == 11) {
		joursNb = 31;
	} else {
		joursNb = 30;
	}
}

// Jour suivant
var dayPos = function(){
	dateCurrent.setDate(dateCurrent.getDate()+1);
	if (dateCurrent.getDate() > joursNb) {
		monthPos();
	}
	refresh();
}

// Jour précédent
var dayNeg = function(){
	dateCurrent.setDate(dateCurrent.getDate()-1);
	if (dateCurrent.getDate() < 1) {
		calculJours();
		monthNeg();
		dateCurrent.setDate(joursNb);
	}
	refresh();
}

// Mois suivant
var monthPos = function(){

	dateCurrent.setMonth(dateCurrent.getMonth()+1);
	if (dateCurrent.getMonth() == 12) {
		dateCurrent.setMonth(0);
		yearPos();
	}
	if (dateCurrent.getDate() > joursNb) {
		dateCurrent.setDate(joursNb);
	}
	calculJours();

	refresh();
}

// Mois précédent
var monthNeg = function(){
	dateCurrent.setMonth(dateCurrent.getMonth()-1);
	if (dateCurrent.getMonth() == -1) {
		dateCurrent.setMonth(11);
		yearNeg();
	}
	calculJours();
	refresh();
}

// Année suivante
var yearPos = function(){
	dateCurrent.setFullYear(dateCurrent.getFullYear()+1);
	date();
}

// Année précédente
var yearNeg = function(){
	dateCurrent.setFullYear(dateCurrent.getFullYear()-1);
	date();
}

var dayMonthNeg = function(){
	dateCurrent.setDate(parseInt(this.innerText));
	monthNeg();	
}

var dayMonthPos = function(){
	// var changeClick = parseInt(this.innerText);
	// dateCurrent.setMonth(dateCurrent.getMonth()+1);
	// dateCurrent.setDate(changeClick);
	dateCurrent.setDate(parseInt(this.innerText));
	monthPos();
}

// Spawn case pour chaque jour 
var parent = document.getElementById('tableau');
var spawn = function(){
	var firstDay =  new Date(dateCurrent.getFullYear(), dateCurrent.getMonth(), 1);
	var indexDay = firstDay.getDay();
	parent.innerHTML="";
	// Selectionne la case cliquée et attribut la nouvelle date
	var setActive = function(){
		for (var i = 0; i < stockCell.length; i++) {
			stockCell[i].classList.remove('active');
		}
		dateCurrent.setDate(parseInt(this.innerText));
		this.classList.add('active');
		date();

	}
	var stockCell = [];
	var p = 0;
	var i = 0;
	var n = 0;
	var previousMonth = new Date(dateCurrent.getFullYear(), dateCurrent.getMonth(), 0);
	var previousDayCount = previousMonth.getDate() + 1 - indexDay;
	var nextMonth = new Date(dateCurrent.getFullYear(), dateCurrent.getMonth() + 1, 0);
	var nextDayCount = nextMonth.getDate(1);
	// Remplissage avec la fin du mois précédent pour remplir la rangée avant le 1 du mois en cours
	for (p = 0; p < indexDay; p++) {
		var cellP = document.createElement("div");
		cellP.classList.add('cell', 'inactive');
		cellP.addEventListener("click", dayMonthNeg );
		cellP.textContent = previousDayCount + p;
		stockCell.push(cellP);
		parent.appendChild(cellP);
	}
	// Crée une case par jour dans le mois en cours
	for(i=1; i <= joursNb; i++) {
		var cellC = document.createElement("div");
		cellC.classList.add('cell');
		if (i == dateCurrent.getDate()) {
			cellC.classList.add('active');
		}
		cellC.addEventListener("click", setActive);
		cellC.textContent = i;
		stockCell.push(cellC);
		parent.appendChild(cellC);
	}
	// Remplissage avec le début du mois suivant pour finir la rangée aprés le mois en cours
	while ((p + i + n - 1) % 7 != 0){
		var cellN = document.createElement("div");
		cellN.classList.add('cell', 'inactive');
		cellN.addEventListener("click", dayMonthPos);
		cellN.textContent = n + 1;
		stockCell.push(cellN);
		parent.appendChild(cellN);
		n += 1;
	}
}


calculJours();
refresh();

document.getElementById('yearNeg').addEventListener("click", yearNeg);
document.getElementById('monthNeg').addEventListener("click", monthNeg);
document.getElementById('dayNeg').addEventListener("click", dayNeg);
document.getElementById('dayPos').addEventListener("click", dayPos);
document.getElementById('monthPos').addEventListener("click", monthPos);
document.getElementById('yearPos').addEventListener("click", yearPos);
document.getElementById('goToDate').addEventListener("click", dateInput);