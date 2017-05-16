function validateForm(){

	function formularioDom(dato,clase,n){
		var spanElement = document.createElement("span");
		var spanText = document.createTextNode("Campo inválido. Ingrese nuevamente su " + dato + ".");
		var spanFather = document.getElementsByClassName(clase + " input-box")[n];
		spanElement.appendChild(spanText);
		spanFather.appendChild(spanElement);
	}

	function name(){
		var idNombre = document.getElementById("name").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(idNombre)){
			formularioDom("nombre","name-container",0);
		}
	}
	name();

	function lastName(){
		var idApellido = document.getElementById("lastname").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(idApellido)){
			formularioDom("apellido","lastname-container",0);
		}
	}
	lastName();

	function email(){
		var idCorreo = document.getElementById("input-email").value;
		if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo)){
			formularioDom("correo","email-container",0);
		}
	}
	email();

	function contrasena(){
		var idContrasena = document.getElementById("input-password").value;
		if (idContrasena=="123456" || idContrasena=="098765" || idContrasena.toLowerCase()=="password" || idContrasena.length<6){
			formularioDom("contraseña","form-group",0);
		}
	}
	contrasena();

	function selection(){
		var eleccion = document.getElementsByTagName("select"); //enlista en un array
		var large = eleccion.length;
		for (i=0 ; i<large ; i++){
			if (eleccion[i].value == 0){
				formularioDom("opción","form-group",1);
			}
		}
	}
	selection();
}