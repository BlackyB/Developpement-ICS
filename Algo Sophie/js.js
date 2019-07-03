var dice = [];
var stockage = [];
var roll = 3;
var nbDice = 3;
var show = document.getElementById('resultat');
var stock = document.getElementById('desStock');
var nbLances = document.getElementById('lancers');

function lancer () {
	dice = [];
	if (roll !== 0) {
		for (var i = 0; i < nbDice; i++) {
			dice[i] = Math.floor((Math.random()*6)+1);
		}
		for (var ibis = 0; ibis < dice.length; ibis++) {
			if (dice[ibis] == 1 && stockage.includes(1) == false){
				stockage.push(dice[ibis]);
				nbDice --;
			}	
			if (dice[ibis] == 2 && stockage.includes(2) == false){
				stockage.push(dice[ibis]);
				nbDice --;
			}
			if (dice[ibis] == 4 && stockage.includes(4) == false){
				stockage.push(dice[ibis]);
				nbDice --;
			}
		}
		show.innerHTML = dice.join(". ");
		stock.innerHTML = stockage;
		roll --;
		nbLances.innerHTML = "Il vous reste " + roll + " lancés.";
	} 
	else {
		alert('Vous avez déja effectué 3 lancés. Redémarrage de la partie');
		resetAll();
	}
	if (nbDice == 0){
		alert('Vous avez gagné !');
	}
}
function resetAll (){
	dice = [];
	stockage = [];
	roll = 3;
	nbDice = 3;
	nbLances.innerHTML = "Il vous reste " + roll + " lancés.";
	show.innerHTML = "Affichage du lancé en cours";
	stock.innerHTML = "Dès mis de coté";
}