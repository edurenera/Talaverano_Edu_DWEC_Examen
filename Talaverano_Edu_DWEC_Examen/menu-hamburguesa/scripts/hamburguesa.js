 // Usando una función de flecha como callback
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {//añadimos el evento click
  navLinks.classList.toggle('active');//cambias la visibilidad
});

/*
//Implementación con función anónima y notación declarativa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function toggleNav() {
  navLinks.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav);
*/
