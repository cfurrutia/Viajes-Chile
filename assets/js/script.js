$(document).ready(function () {


    // navbar
    var nav = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 800) {
            nav.classList.add('bg-dark', 'shadow');
        } else {
            nav.classList.remove('bg-dark', 'shadow');
        }
    });

    // smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // destacados - al hacer click en el titulo desaparace el texto
    $(".card-title").click(function () {
        $(".card-text").toggle();
    });

    // Formulario enviar mensaje de contacto
    $(function () {
        $("#enviarMensaje").click(function () {
            alert("El mensaje fue enviado correctamente...")
        });
    });

});