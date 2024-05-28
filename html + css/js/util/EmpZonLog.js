
function validarFormulario(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos de entrada
    const usuario = document.querySelector('input[name="usuario"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Verifica si el usuario y la contraseña son correctos
    if (usuario === "Juan" && password === "12345") {
        // Redirige a otra página
        window.location = "InicioEZ.html";
    } else {
        // Muestra un mensaje de error
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = "Usuario o contraseña incorrectos";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginform');
    form.addEventListener('submit', validarFormulario);
});