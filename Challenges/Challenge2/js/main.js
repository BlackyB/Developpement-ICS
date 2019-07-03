
var row = [];
var cell = [""];
var text = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "(", ")", "/", "←", ".", "="];
var calcul = "";
var t = 0;
var total;
var display;

var main = document.getElementById("calculatrice");

var calculatrice = document.createElement("div");
calculatrice.classList.add("col,grey");
main.appendChild(calculatrice);

var affichage = document.createElement("input");
affichage.setAttribute("type", "text");
affichage.setAttribute("placeholder", "Saisir Calcul");
affichage.classList.add("ecran");
calculatrice.appendChild(affichage);

var row1 = document.createElement("div");
row1.classList.add("row");
calculatrice.appendChild(row1);
row.push(row1);

var row2 = document.createElement("div");
row2.classList.add("row");
calculatrice.appendChild(row2);
row.push(row2);

var row3 = document.createElement("div");
row3.classList.add("row");
calculatrice.appendChild(row3);
row.push(row3);

var row4 = document.createElement("div");
row4.classList.add("row");
calculatrice.appendChild(row4);
row.push(row4);

var row5 = document.createElement("div");
row5.classList.add("row");
calculatrice.appendChild(row5);
row.push(row5);

var getValue = function(){
	var bouton = parseInt(this.value); 
	calcul += this.value; 
	affichage.value = calcul;
	resultat();
}

var suppr = function(){
	display = (affichage.value).toString();
	display = display.slice(0, display.length-1);
	calcul = display;
	affichage.value = display;
}

var resultat = function(){
	total = eval(calcul);
	affichage.value = total;
	calcul = total;
}

for (var i = 0; i < row.length; i++) {
	for (var j = 0; j < 4; j++) {
		if (cell.length == 20) {
			break;
		}
		cell[j] = document.createElement("input");
		cell[j].setAttribute("type", "button");
		cell[j].setAttribute("value",text[t] ) ;
		cell[j].classList.add("cell");
		cell.push(cell[j])
		row[i].appendChild(cell[j]);
		cell[j].addEventListener('click', getValue);
		t++;
	}
}
cell[17].removeEventListener('click', getValue);
cell[17].addEventListener('click', suppr);

cell[19].removeEventListener('click', getValue);
cell[19].addEventListener('click', resultat);
cell[19].classList.add("mid");