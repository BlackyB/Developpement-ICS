//var monId = document.getElementById('monId');
//alert(monId.innerText);
//alert(monId.innerHTML);

//var mesDiv = document.getElementsByTagName('div');

/*for (var i = 0; i < mesDiv.length; i++) {
	alert(mesDiv[i].innerText);
}*/

//var mesNames = document.getElementsByName('maDiv');
/*for (var i = 0; i < mesNames.length; i++) {
	alert(mesNames[i].innerHTML);
}*/

//var selector = document.querySelector("#monId span");
//alert(selector.innerHTML);
//var selectorAll = document.querySelectorAll("div");
//alert(selectorAll);

//selector.classList.add("rouge", "bleu");
//alert(selector.classList);
//selector.classList.add("bleu");
//alert(selector.classList);
/*for (var i = 0; i < selectorAll.length; i++) {
	alert(selectorAll[i].innerHTML);
}*/

/*setTimeout(function(){
	monId.style.color = "red";	
}, 2000);*/


//var h = document.querySelector("head");
//h.innerHTML += "<style>.yellow{ background-color:yellow;}</style>";
//monId.classList.add("yellow");

//var inputEmail = document.querySelector("input[name=email]");
//alert(inputEmail.getAttribute("placeholder"));
//alert(inputEmail.value);
//inputEmail.setAttribute("placeholder", "Mon nouveau placeholder");
//inputEmail.removeAttribute("placeholder");

//var firstDiv = document.querySelector("div");
//var mesSections = firstDiv.querySelectorAll("section");



var field = document.querySelector("fieldset");
var aRajouter = "<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, et voluptatibus fugiat ea cum corporis iure sint maiores, molestias in illum ipsa ipsam esse obcaecati pariatur magnam mollitia atque porro.";

/*field.innerHTML += aRajouter;*/

var brrr = document.createElement("br");
var paragraphe = document.createElement("p");
paragraphe.setAttribute("class", "bleu");
paragraphe.setAttribute("id", "monParagraphe");
var text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor corporis quaerat ea excepturi fugit, magnam ipsam possimus ipsa delectus consequuntur quia, odio? Suscipit tempore odio perspiciatis, magni eveniet ratione nostrum.");

paragraphe.appendChild(text);
field.appendChild(brrr);
field.appendChild(paragraphe);






//var monId = document.getElementById("homer");

//var monParent = monId.parentNode;

//alert(monParent.nodeName);
//alert(monParent.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nodeName);

//console.log(monParent.childNodes);
/*
if(monId.hasChildNodes()){
	alert("tata yoyo"); 
} else {
	alert("ma grand mère a un chapeau");
}*/

