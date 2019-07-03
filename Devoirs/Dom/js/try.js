var getBody = document.getElementsByTagName('body');
var body = getBody[0];

var maDivTP4 = document.createElement('div');
maDivTP4.setAttribute("id", "divTP4");
body.appendChild(maDivTP4);

var formulaire = document.createElement('form');
formulaire.setAttribute("enctype", "multipart/form-data");
formulaire.setAttribute("method", "post");
formulaire.setAttribute("action", "upload.php");
maDivTP4.appendChild(formulaire);

var champ = document.createElement('fieldset');
formulaire.appendChild(champ);

var legend = document.createElement('legend');
legend.innerText = "Uploader une image"
champ.appendChild(legend);

var div = document.createElement('div');
div.setAttribute("style", "text-align: center");
champ.appendChild(div);

var label = document.createElement('label');
label.setAttribute("for", "inputUpload");
label.innerText = "Image à uploader :";
div.appendChild(label);

var input = document.createElement('input');
input.setAttribute("type", "file");
input.setAttribute("name", "inputUpload");
input.setAttribute("id", "inputUpload");
div.appendChild(input);

var br1 = document.createElement('br');
div.appendChild(br1);

var br2 = document.createElement('br');
div.appendChild(br2);

var inputSend = document.createElement("input");
inputSend.setAttribute("type", "submit");
inputSend.setAttribute("value", "Envoyer");
div.appendChild(inputSend);