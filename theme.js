const header = document.querySelector(".header")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
const accordion = document.querySelector(".itc-accordion-header")
const accor = document.getElementById("acc1")


let color = "";
let textColor = "";
if (localStorage.getItem("bg-color")!==null) {
    color = localStorage.getItem("bg-color")
    header.style.background = color;
    main.style.background = color;
    footer.style.background = color;
    textColor = localStorage.getItem("text-color")
    header.style.color = textColor;
    main.style.color = textColor;
    footer.style.color = textColor;
}

function switchThemeLight() {
    header.style.background = " rgb(184, 125, 0)";
    main.style.background = "rgb(255, 239, 237)";
    footer.style.background = "rgb(184, 125, 0)";
    accordion.style.background = " rgb(184, 125, 0)";
    accor.style.background = " rgb(184, 125, 0)";
    header.style.transition = "0.5s ease-out 0.5s";
    main.style.transition = "0.5s ease-out 0.5s";
    footer.style.transition = "0.5s ease-out 0.5s";
    accordion.style.transition = "0.5s ease-out 0.5s";
    accor.style.transition = "0.5s ease-out 0.5s";
    header.style.color = "black";
    main.style.color = "black"; 
    footer.style.color = "black";
    accordion.style.color = "black";
    accor.style.color = "black";
    localStorage.setItem("bg-color","rgb(255, 239, 237)")
    localStorage.setItem("text-color", "black")
} 
function switchThemeDark() {
    header.style.background = "rgb(0, 61, 97)";
    main.style.background = "darkslategrey";
    footer.style.background = "rgb(0, 61, 97";
    accordion.style.background = " rgb(0, 61, 97)";
    accor.style.background = " rgb(0, 61, 97)";
    header.style.transition = "0.5s ease-out 0.5s";
    main.style.transition = "0.5s ease-out 0.5s";
    footer.style.transition = "0.5s ease-out 0.5s";
    accordion.style.transition = "0.5s ease-out 0.5s";
    accor.style.transition = "0.5s ease-out 0.5s";
    header.style.color = "whitesmoke";
    main.style.color = "whitesmoke";
    footer.style.color = "whitesmoke";
    accordion.style.color = "whitesmoke";
    accor.style.color = "whitesmoke";
    localStorage.setItem("bg-color","darkslategrey")
    localStorage.setItem("text-color","whitesmoke")
} 
