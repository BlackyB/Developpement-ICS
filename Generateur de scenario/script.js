let display = document.getElementById('display');
let array1 = [["Mon oncle", "Le plombier", "Le garagiste", "Un SDF", "La concierge", "Le livreur de pizza"],["La maitresse", "La femme de ménage"]];
let array2 = ["part en vacances", "n'arrive pas à payer ses factures", "est moche", "est venu sonner à ma porte", "a oublier ses clés", "a perdu beaucoup d'argent au Casino", " a décidé de changer de vie", "vient de divorcer", "a perdu son enfant", "est en phase terminale", "a fait bruler le diner", "sort ce soir", ""];
let array3 = ["désormais", "ce qui explique pourquoi", "pourtant", "malgrès tout", "mais", "alors", "conséquences :", ". Résultat,"];
let array4 = [["la prostitution est apparue comme une solution", "sa femme le trompe", "il n'arrive plus à s'asseoir", "il y réfléchira à deux fois le prochain coup"], ["elle a décidé de s'épiler", "elle veut payer en nature", "elle a besoin de l'aide d'un étalon Sénégalais", "elle veut s'empaler sur la poutre de Bamako"]];
let arrayTotal = [array1, array2, array3, array4];
let part1;
let part2;
let part3;
let part4;
let partTotal = [part1, part2, part3, part4];

const randomPick = () => {
	let gender = Math.floor(Math.random()*2);
	for (var i = 0; i < arrayTotal.length; i++) {
		if (i == 0 || i == 3) {
			partTotal[i] = arrayTotal[i][gender][Math.floor(Math.random() * arrayTotal[i][gender].length)]
			
		} else { 
			partTotal[i] = arrayTotal[i][Math.floor(Math.random() * arrayTotal[i].length)+1]
	}
	display.innerText = partTotal.join(" ");
}
}

document.getElementById('generate').addEventListener('click', randomPick);

