let box__info = document.querySelector('.box__info');
let select__active = box__info.querySelector('.select__active');
let select__no_active = box__info.querySelector('.select__no-active');
let svg = select__active.querySelector('svg');

select__active.addEventListener('click', () => {
    select__no_active.classList.toggle('active');
    svg.classList.toggle('active');
})
