
let searchBar = document.getElementById('searchBar');
let searchBtn = document.getElementById('searchBtn');
let maVar;
let displayResult = document.getElementById('demo');


maRegex = () => {
	let pattern = /^[a-zA-Z -]*$/;
	if (pattern.test(searchBar.value) == false) {
		alert("Veuillez rentrer uniquement des lettres");
		searchBar.value = searchBar.value.replace(/[^a-zA-Z -]/g,'');
	}
	let getDoc = () => {
		let compteur = 0;
		let stockCell = [];
		displayResult.innerText = '';
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let searchL = (searchBar.value).length;
				let searchStart = ((searchBar.value).slice(0, searchL));
				let arrayVille = ((this.responseText).split("\r\n"));
				if (searchL != 0) {
					for (let i = 0; i < arrayVille.length; i++) {
						let chkStart = arrayVille[i].slice(0, searchL);
						if (searchStart.toUpperCase() == chkStart.toUpperCase()) {
							let cell = document.createElement("div");
							cell.textContent = arrayVille[i];
							displayResult.setAttribute('class', 'affichage');
							cell.setAttribute('class', 'padding');
							cell.addEventListener("click", function(){
								searchBar.value = arrayVille[i];
								displayResult.innerHTML = '';
								displayResult.removeAttribute('class', 'border');
							});
							cell.addEventListener('mouseover', function(){
								cell.classList.toggle('hover');
							})
							cell.addEventListener('mouseout', function(){
								cell.classList.toggle('hover');
							})
							displayResult.appendChild(cell);
							compteur += 1;
							if (compteur == 10) {
								break;
							}
						}
					}
				}
			}
		};
		xhttp.open("GET", "assets/liste.txt", true);
		xhttp.overrideMimeType("text/plain");
		xhttp.send();
	}
	getDoc();
}

let recherche = () => {
	let adresse = "https://www.google.com/maps/place/" + searchBar.value;
	document.location.href=adresse;
}
searchBar.addEventListener('keyup', function(e){
	if (e.keyCode == 13) {
		recherche();
	} else {
		maRegex()
	}
});
searchBtn.addEventListener('click', recherche);