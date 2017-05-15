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

	function lastName(){
		var idApellido = document.getElementById("lastname").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(idApellido)){
			var spanLastName = document.createElement("span");
			var spanText = document.createTextNode("Apellido inválido. Ingrese nuevamente.");
			var spanFather = document.getElementsByClassName("lastname-container input-box")[0];
			spanLastName.appendChild(spanText);
			spanFather.appendChild(spanLastName);
		}
	}
	lastName();

	function email(){
		var idCorreo = document.getElementById("input-email").value;
		if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo)){
			var spanCorreo = document.createElement("span");
			var spanText = document.createTextNode("Correo inválido. Ingrese nuevamente.");
			var spanFather = document.getElementsByClassName("email-container input-box")[0];
			spanCorreo.appendChild(spanText);
			spanFather.appendChild(spanCorreo);
		}
	}
	email();

	function contrasena(){
		var idContrasena = document.getElementById("input-password").value;
		if (idContrasena=="123456" || idContrasena=="098765" || !(/^(?=.*\d).{6,}$/).test(idContrasena)){
			var spanContrasena = document.createElement("span");
			var spanText = document.createTextNode("Contraseña inválida. Ingrese nuevamente.");
			var spanFather = document.getElementsByClassName("form-group input-box")[0];
			spanContrasena.appendChild(spanText);
			spanFather.appendChild(spanContrasena);
		}
	}
	contrasena();

	function selection(){
		var eleccion = document.getElementsByTagName("select"); //enlista en un array
		var large = eleccion.length;
		for (i=0 ; i<large ; i++){
			if (eleccion[i].value == 0){
				var spanEleccion = document.createElement("span");
				var spanText = document.createTextNode("Debe escoger una de las opciones.");
				var spanFather = document.getElementsByClassName("form-group input-box")[1];
				spanEleccion.appendChild(spanText);
				spanFather.appendChild(spanEleccion);
			}
		}
	}
	selection();

}