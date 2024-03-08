// navbar
var nav = document.querySelector('.navbar');

// desplazamiento
window.addEventListener('scroll', function () {
    if (window.scrollY > 540) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

$(function () {
    $("#enviarMensaje").click(function () {
        alert("El mensaje fue enviado correctamente...")
    });
});