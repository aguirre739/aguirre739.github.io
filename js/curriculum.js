function validarNombre(input) {
    // console.log(input);
    if (input.value == "") {
        input.className = "form-control is-invalid";
        return false;
    } else {
        input.className = "form-control is-valid";
        return true;
    }
}

function validarMail(input) {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarTelefono(input) {
    let quitarEspacio = / /;
    if (input.value != "" && !isNaN(input.value) && !quitarEspacio.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarConsulta(texto) {
    if (texto.value != "" && texto.value.length >= 10) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}

function validarGeneral(event) {
    event.preventDefault();//evita que recargue la pagina
    console.log("dentro de validar general" + event);

    if (validarNombre(document.getElementById('nombre')) &&
        validarMail(document.getElementById('mail')) &&
        validarTelefono(document.getElementById('telefono')) &&
        validarConsulta(document.getElementById('consulta'))) {
        enviarMail();
        console.log("dentro de validar general")
    } else {
        alert("ocurrio un error");
    }
}

function enviarMail() {
    let template_params = {
        from_name: document.getElementById("nombre").value,
        message_html: `Mensaje: ${document.getElementById("consulta").value} - Email: ${document.getElementById("mail").value} - Celular: ${document.getElementById("telefono").value}`
    }

    let service_id = "default_service";
    let template_id = "curriculum";
    emailjs.send(service_id, template_id, template_params);
}