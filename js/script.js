let burgerBtn = document.getElementById('header__burger-button'),
    burgerNav = document.getElementsByClassName('header__burger-nav')[0],
    headerLogo = document.getElementsByClassName('header__logo')[0],
    overlay = document.getElementsByClassName('header__burger-overlay')[0];

burgerBtn.addEventListener('click', showBurger);
overlay.addEventListener('click', showBurger);

function showBurger() {
    headerLogo.style.display === 'none' ? headerLogo.style.display = 'initial' : headerLogo.style.display = 'none';
    burgerBtn.classList.toggle('burger-menu__active');
    burgerNav.classList.toggle('burger-nav__active');
    overlay.classList.toggle('overlay-active');
}

