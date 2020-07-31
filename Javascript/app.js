const selectElement = function (element) {
    return document.querySelector(element);
}
let menuToggler = document.getElementsByClassName("hamburger")[0];
let header = selectElement('header');

menuToggler.addEventListener('click',function(){
    header.classList.toggle('toggle');
});