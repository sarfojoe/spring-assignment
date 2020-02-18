// Selection of HTML objects
var burger = document.querySelector('.burger i');
var nav = document.querySelector('.nav');
// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}
// Calling the function after click event occurs
burger.addEventListener('click', function () {
    toggleNav();
});