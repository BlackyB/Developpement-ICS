$("input[type=button]").on("click", function(){
	//REGEX Tel
	function validateTel() {
		var pattern = /^(0|(00|\+)33)[1-7][0-9]{8}$/;
		return $.trim($(".inp").eq(2).val()).match(pattern) ? true : false;
	}

	//REGEX Email
	function validateEmail() {
		var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return $.trim($(".inp").eq(3).val()).match(pattern) ? true : false;
	}

	//REGEX Nom
	function validateName() {
		var pattern = /\d/;
		return pattern.test($(".inp").eq(0).val());
	}

	//REGEX Prénom
	function validateSurname() {
		var pattern = /\d/;
		return pattern.test($(".inp").eq(1).val());
	}

	//REGEX CP
	function validateCP() {
		var pattern = /^[0-9]{1,5}$/;
		return $.trim($(".inp").eq(5).val()).match(pattern) ? true : false;
	}

	//Taille Message
	var wordArray = $(".inp").eq(7).val().split(" ");

	//Nom
	if ($(".inp").eq(0).val().length < 3){
		alert($(".inp").eq(0).attr("name") + ': ce champ doit comporter 3 caractères au minimum'
			);}
	else if (validateName() == true){
		alert($(".inp").eq(0).attr("name") + ': ce champ ne peut pas contenir de nombres'
			);}

	//Prénom
	else if ($(".inp").eq(1).val() != '' && validateSurname() == true){
		alert($(".inp").eq(1).attr("name") + ': ce champ ne peut pas contenir de nombres'
			);}

	//Telephone
	else if (validateTel() == false){
		alert($(".inp").eq(2).attr("name") + ': ce champ doit contenir un numéro de téléphone valide'
			);}

	// Courriel
	else if (validateEmail() == false){
		alert($(".inp").eq(3).attr("name") + ': ce champ doit contenir une adresse email valide'
			);}

	//Adresse
	else if ($(".inp").eq(4).val().length < 3){
		alert($(".inp").eq(4).attr("name") + ': ce champ doit comporter 3 caractères au minimum'
			);}

	//Code Postal
	else if (validateCP() == false){
		alert($(".inp").eq(5).attr("name") + ': ce champ doit comporter 5 chiffres'
			);}

	//Ville
	else if ($(".inp").eq(6).val().length < 3){
		alert($(".inp").eq(6).attr("name") + ': ce champ doit comporter 3 caractères au minimum'
			);}

	//Message
	else if (wordArray.length < 3){
		alert($(".inp").eq(7).attr("name") + ': ce champ doit comporter 3 mots au minimum'
			);}
	//Submit
	else {
		$("form").submit();
	}
	});