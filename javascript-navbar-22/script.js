let navbar = document.getElementById('navbar');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

function toogleMenu() {
  navbar.classList.toggle('show');
}

menu.addEventListener('click', () => {
  menu.classList.add('hide');
})

close.addEventListener('click', () => {
  setTimeout(() => {
    menu.classList.remove('hide');
  }, 500)
})

var copy = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector('.logos').appendChild(copy);