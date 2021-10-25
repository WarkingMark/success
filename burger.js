let header__burger = document.querySelector('.header__burger');
let header__icon = header__burger.querySelector('.icon');
let burger__menu = document.querySelector('.burger__menu');
let close__menu = burger__menu.querySelector('.header__close');

header__icon.addEventListener('click', () => {
    burger__menu.classList.toggle('dn');
})
close__menu.addEventListener('click', () => {
    burger__menu.classList.toggle('dn');
})
