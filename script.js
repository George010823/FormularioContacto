function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre == "") {
        alert("Por favor, diligencie el campo nombre que se encuentra vacio.");
    } else if(correo == "" ){
        alert("Por favor, diligencie el campo correo que se encuentra vacio.");
    } else if(asunto == ""){
        alert("Por favor, diligencie el campo asunto que se encuentra vacio.");
    } else if(mensaje == ""){
        alert("Por favor, diligencie el campo mensaje que se encuentra vacio.");
    } else {
        console.log("Nombre: " + nombre);
        console.log("Correo: " + correo);
        console.log("Asunto: " + asunto);
        console.log("Mensaje: " + mensaje);
    }
}

function resetearFormulario() {
    document.getElementById("formulario-contacto").reset();
}
