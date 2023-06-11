const btnOpen = document.querySelector('.btn-open');
const btnClouse = document.querySelector('.btn-clouse');
const menuElemnts = document.querySelector('.menu');

btnOpen.addEventListener('click', openMenu);
btnClouse.addEventListener('click', clouseMenu);

function openMenu() {
  btnOpen.classList.add('is-hidden');
  btnClouse.classList.remove('is-hidden');
  menuElemnts.classList.remove('is-hidden');
}

function clouseMenu() {
  btnOpen.classList.remove('is-hidden');
  btnClouse.classList.add('is-hidden');
  menuElemnts.classList.add('is-hidden');
}
