	var repetition = document.getElementById('repetition').value;
	var myNames = [];
	var affichage = document.getElementById('showName');

	function mesNoms(){
		if (myNames.length <= repetition - 1) {
			var currentName = document.getElementById('noms');
			myNames.push(currentName.value);
			affichage.innerHTML = "Vous avez entré " + currentName.value;
			noms.value = "";
		}
		else {
			affichage.innerHTML = "Vous avez saisi "; 
			console.log(myNames);
			for(var i = 0; i < myNames.length; i++){
				affichage.innerHTML += myNames[i] + " ";
			}
			noms.value = "";
		}
	}
	function reset(){
		myNames = [];
		affichage.innerHTML = "Tableau remis à zero";
	}