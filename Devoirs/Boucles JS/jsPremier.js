function isFirst(){
	var currentNumber = document.getElementById('monNombre').value;
	var compteurDiviseur = 0;
	if (isNaN(parseInt(currentNumber)) == true || parseInt(currentNumber) < 0 || !Number.isInteger(Number(currentNumber))){
		alert('Entrer un entier positif !');
	} else {
		for (var i = 1; i <= currentNumber; i++) {
			if (currentNumber % i == 0) {
				compteurDiviseur ++;
			}
		}
		if (compteurDiviseur == 2){
			alert(currentNumber + " est un nombre premier");
		} else {
			alert(currentNumber + " n'est pas premier")
		}
	}
}