const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const submenu = arrow.parentElement.nextElementSibling;

    submenu.classList.toggle('show');
    arrow.classList.toggle('rotate-arrow'); 
  });
});

