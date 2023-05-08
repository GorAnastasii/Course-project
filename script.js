const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearClass()
    slide.classList.add('active')
  })
}

function clearClass() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav__menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('burgermenu_active');
  menu.classList.toggle('active');
})
