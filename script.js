function mostrarFormulario() {
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("formulario-acceso").style.display = "flex";
}

function accederPagina(event) {
    event.preventDefault();
    document.getElementById("formulario-acceso").style.display = "none";
    document.getElementById("pagina-principal").style.display = "block";
}