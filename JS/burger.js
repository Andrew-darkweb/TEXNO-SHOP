const nav = document.querySelector('.nav__list')
const burger = document.querySelector('.burger')
const menuItem = document.querySelectorAll('.menu__item')


function burgerClick() {
    nav.classList.toggle('nav__list_active')
    burger.classList.toggle('active')
    menuItem.forEach((link, index)=>{
        console.log(index)
        if(link.style.animation) {
            link.style.animation=""
        }
        else {
            console.log(123)
            link.style.animation=`navLinkAnim 2s ease forwards 0.5s`
            console.log(193)
        }
    })
}
