const buyBtn = document.querySelector('.buy-btn');
const email = document.querySelector('.form__email');
const tel = document.querySelector('.form__tel');
const select = document.querySelector('.form__select');

buyBtn.addEventListener("click", correct);

function correct() {
    alert("Ваша заявка записана.\nОжидайте, мы с Вами свяжемся!");
    email.value = '';
    tel.value = '';
    select.selectedIndex = 0;
}


