let priceTag = document.querySelector(".product__price");
let flagBuy = false;
let flagBtn = false;

const buttonTag = document.querySelector(".product__btn");

function buyProduct() {     
    if (flagBuy == false) {
    buttonTag.innerText = "В корзине";
    buttonTag.classList.add('product__btn_active');
    buttonTag.style.borderStyle = 'solid';
    buttonTag.classList.add('product__btn1_active');
    flagBuy = true;
    }
    else {
        buttonTag.innerText = "Купить";
        buttonTag.classList.remove('product__btn_active');
        buttonTag.style.borderStyle = 'none';
        buttonTag.classList.remove('product__btn1_active');
        flagBuy = false;
    }
}
const per30 = document.querySelector("#btn2");

function getLow() {
    if (flagBtn == false) {
    priceTag.innerText = Number(priceTag.innerText) - Number(priceTag.innerText) * 0.3;
    flagBtn = true;
    }
    else {
    priceTag.innerText = '6300';

    }
}

    const per50 = document.querySelector("#btn3");

function getLower() {
        priceTag.innerText = '9000';
        priceTag.innerText = Number(priceTag.innerText) - Number(priceTag.innerText) * 0.5;
        flagBtn = true;
        }