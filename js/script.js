document.querySelector(".bars__menu").addEventListener("click",animateBars);
const linea_1=document.querySelector(".line1__bars-menu");
const linea_2=document.querySelector(".line2__bars-menu");
const linea_3=document.querySelector(".line3__bars-menu");
const nav__responsive=document.querySelector(".menu");
const nav__responsive__letras=document.querySelector(".menu__options");

function animateBars(){
    linea_1.classList.toggle("activeline1__bars-menu");
    linea_2.classList.toggle("activeline2__bars-menu");
    linea_3.classList.toggle("activeline3__bars-menu");

    nav__responsive.classList.toggle("menu-activate");
    nav__responsive__letras.classList.toggle("menu__letras-active");
}