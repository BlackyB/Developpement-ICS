	var repetition = document.getElementById('repetition').value;
	var myNumbersPos = [];
	var myNumbersNeg = [];
	var affichage = document.getElementById('showName');
	var currentNumber;

	function mesNombres(){
		if (myNumbersPos.length + myNumbersNeg.length <= repetition) {
			currentNumber = parseInt(document.getElementById('nombres').value);			
			if (currentNumber >= 0) {
				myNumbersPos.push(currentNumber);	
			} else if (currentNumber < 0) {
				myNumbersNeg.push(currentNumber);
			}
			affichage.innerHTML = "Vous avez entré " + currentNumber;
		}
		else {
			affichage.innerHTML = "Vous avez entré " + myNumbersPos.length + " nombres positifs et " + myNumbersNeg.length + " nombres négatifs."; 
		}
	}

	function reset(){
		myNumbersPos = [];
		myNumbersNeg = [];
		affichage.innerHTML = "Tableau remis à zero";
	}