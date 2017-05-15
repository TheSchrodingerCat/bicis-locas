function validateForm(){

	function name(){
		var idNombre = document.getElementById("name").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(idNombre)){
		var spanName = document.createElement("span");
		var spanText = document.createTextNode("Nombre inválido. Ingrese nuevamente.");
		var spanFather = document.getElementsByClassName("name-container input-box")[0];
		spanName.appendChild(spanText);
		spanFather.appendChild(spanName);
		}
	}
	name();

	



}