	var repetition;
	var myNumbersPos = [];
	var myNumbersNeg = [];
	var total;
	var affichage = document.getElementById('Block_js');

	do {
		repetition = parseInt(prompt("Nombre de repetition", "Repetitions"));
	}
	while (isNaN(repetition));

	while (total != repetition) {
		var currentNumber = parseInt(prompt("Entrer votre nombre"));			
		if (currentNumber >= 0) {
			myNumbersPos.push(currentNumber);
		} else if (currentNumber < 0) {
			myNumbersNeg.push(currentNumber);
		}
		total = myNumbersNeg.length + myNumbersPos.length;
		affichage.innerHTML = "Vous avez saisi " + currentNumber;
	}
	affichage.innerHTML = "Vous avez entré " + myNumbersPos.length + " nombres positifs et " + myNumbersNeg.length + " nombres négatifs."; 