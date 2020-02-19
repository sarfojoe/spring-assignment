/* Navigation bar */
// Selection of HTML objects
var burger = document.querySelector('.burger i');
var nav = document.querySelector('.nav');

function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}
// Calling the function after click event occurs
burger.addEventListener('click', function () {
    toggleNav();
    document.querySelector('.nav-active').style.display = 'block';
});

/* Pop-up window on Project card */

var modal = document.getElementById('pop-up');
var btn = document.getElementById('projectBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        this.modal.style.display = 'none';
    }
}

/* Scroll top button */
$(document).ready(function () {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //appear after 100px scroll down
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
});


