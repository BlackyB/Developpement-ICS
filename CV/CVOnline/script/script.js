// if (window.screen.orientation == "landscape-primary" || window.screen.orientation == "landscape-secondary") {

	let nav = document.getElementsByClassName('nav');
	for (var i = 0; i < nav.length; i++) {
		nav[i].addEventListener('click', function(){
			for (var i = 0; i < nav.length; i++) {
				let attrAll = nav[i].getAttribute('href').replace('#','');
				let removeAll = document.getElementById(attrAll);
				nav[i].style.backgroundColor = "rgba(200, 200, 200, 0.2)";
				setTimeout(function(){
					removeAll.style.height = "0";
					removeAll.style.opacity = "0";
				}, 250);
				removeAll.style.display = "none";
			}
			let attr = this.getAttribute('href').replace('#', '');
			let removeNone = document.getElementById(attr);
			removeNone.style.display = "flex";
			setTimeout(function(){
				removeNone.style.height = "100%";
				removeNone.style.opacity = "1";
			}, 250);
			this.style.backgroundColor = "rgba(200, 200, 200, 0.1)";	
		});
		nav[i].addEventListener('mouseover', function(){
			this.style.borderBottom = "2px solid white";
		});
		nav[i].addEventListener('mouseout', function(){
			this.style.borderBottom = "none";
		});
	}

let contact = document.getElementById('contact');
contact.addEventListener('mouseover', function(){
	contact.style.transform = "scale(1.1)";
	contact.style.backgroundColor = "rgb(25, 25, 25)";
})
contact.addEventListener('mouseout', function(){
	contact.style.transform = "scale(1)";
	contact.style.backgroundColor = "transparent";
})

let macaron = document.getElementById('fondBlur');
let check;
let inspi = 1;
let breath = () => {
	console.log(inspi);
	macaron.style.transform = "scale(" + inspi + ")";
	if (inspi == 1.1) {
		check = true;
	}
	if (inspi == 1) {
		check = false;
	}
	if (check == false) {
		inspi += 0.1;
	}
	if (check == true) {
		inspi -= 0.1;
	}
}

let timer = setInterval(breath, 1100);
let trigger = document.getElementById('fondBlur');
trigger.addEventListener('click', function(){
	trigger.style.transform = "scale(0)";
	document.getElementById('containerTotal').style.width = "100%";
	document.getElementById('containerTotal').style.height = "100%";
	document.getElementById('navBar').style.display = "flex";
	document.getElementById('containerDisplay').style.display = "flex";
	clearInterval(timer);
	setTimeout(function(){
		document.getElementById('navBar').style.opacity = "1";
		document.getElementById('start').click();
		trigger.style.display = "none"
	}, 1000)
});

macaron.style.transform = "scale(1.1)";

let modal = document.getElementById("myModal");
let btn = document.getElementById("contact");
let span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', function() {
	modal.style.display = "block";
});

span.addEventListener('click', function() {
	modal.style.display = "none";
});

window.addEventListener('click', function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
});

let myResize;
window.addEventListener('resize', function(){
	clearTimeout(myResize);
	myResize = setTimeout(resizeFunction, 750);
});

let resizeFunction = () => {
	document.location.href = "#containerDisplay";
};

const envoi = document.getElementById('envoi');
envoi.addEventListener('click', function(){
	const regexNom = /^([a-zA-Z \-'éè]{3,})$/;
	const regexSujet = /^((([\S]+)(\s)*){1,})$/;
	const regexMail = /^([\w\-.]+)@(([\w\-]+.)+)([a-zA-Z]{2,4})(]?)$/;
	const regexMessage = /^((([\S]+)(\s)+){9})((([\S]+)(\s)*){1,})$/m;
	let valid = true;

		// Check Nom < 3 caractères
		if (regexNom.test(document.getElementById("name").value) == false) {
			alert('Nom invalide');
			valid = false;
		// Check Email invalide
	} else if (regexMail.test(document.getElementById('email').value) == false) {
		alert('Email invalide');
		valid = false;
		// Check Sujet < 3 caractères
	} else if (regexSujet.test(document.getElementById('sujet').value) == false) {
		alert('Sujet invalide');
		valid = false;
		// Check Message < 10 mots
	} else if (regexMessage.test(document.getElementById('message').value) == false) {
		alert('Message invalide');
		valid = false;
		// Sinon écrit la valeur brute dans la BDD
	} else if (valid = true) {
		formulaire.submit();
	}
});

window.onload = function(){
	if ( document.getElementById('showModal')){
		modal.style.display = "block";;
	}
};
