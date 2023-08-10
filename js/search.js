const searhDefault = document.querySelector('.header__button');
const searchActive = document.querySelector('.header_search');
const searchX = document.querySelector('.search-X');


searhDefault.addEventListener('click', () => {
    searchActive.classList.add('header_search_active');
})

searchX.addEventListener('click', () => {
    searchActive.classList.remove('header_search_active');
})