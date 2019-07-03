$(document).ready( function () {
    $('#myTable').DataTable();
} );


let form = document.getElementById('formulaire');
let bouton = document.getElementById('create');
bouton.addEventListener('click', function(){
	form.classList.toggle('none');
});
