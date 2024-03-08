// navbar
var nav = document.querySelector('.navbar');

// desplazamiento
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});