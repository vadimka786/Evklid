let burger_window = document.querySelector('.burger_header');
let burger_menu = document.querySelector('.header__list');

burger_window.addEventListener('click' , function() {
    burger_window.classList.toggle('burger-icon-active');
    burger_menu.classList.toggle('burger-active');
})