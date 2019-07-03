var heure = document.getElementById('heure');
var minute = document.getElementById('minute');
var seconde = document.getElementById('seconde');

var date = new Date();
hour = date.getHours();
mins = date.getMinutes();
seconds = date.getSeconds();

var rotaS = 0 + seconds*6 - 90;
var rotaM = 0 + mins*6 - 90;
var rotaH = 0 + hour*30 - 90;

seconde.style.transform = 'rotate(' + rotaS + 'deg)';
minute.style.transform = 'rotate(' + rotaM + 'deg)';
heure.style.transform = 'rotate(' + rotaH + 'deg)';

var horloge = function(){
	seconde.style.transform = 'rotate(' + rotaS + 'deg)';
	rotaS +=6;
	if (rotaS > 360) {
		rotaS = 0;
		rotaM +=6;
		minute.style.transform = 'rotate(' + rotaM + 'deg)';
		if (rotaM > 360) {
			rotaM = 0;
			rotaH +=30;
			heure.style.transform = 'rotate(' + rotaH + 'deg)';
			if (rotaH > 360){
				rotaH = 0;
			}
		}
	}
}
var tick = function(){
	setInterval(horloge, 1000);
}

tick();
