document.querySelector('.header__burger').addEventListener('click', (event) => {
    if(!event.target.classList.contains('header__burger-nav')) {
        event.currentTarget.classList.toggle('open');
    }
});