function monAge (){
	var age = document.getElementById('age').value	;
	if (isNaN(parseInt(age)) == true){
		alert('Rentrer uniquement votre age sous forme de nombre')
	} else if (age < 0){
		alert('Votre age doit être un nombre positif');
	} else {
		if (age >= 1 && age < 18){
			alert("Vous n'êtes pas encore majeur");
		} else if (age >= 18 && age < 50){
			alert("Vous êtes majeur mais pas encore senior.");
		} else if (age >= 50 && age < 60){
			alert("Vous êtes senior mais pas encore retraité.");
		} else if (age >= 60){
			alert("Vous êtes retraité, profitez de votre temps libre !");
		} else {
			alert("T'es trop jeune !");
		}
	}
}