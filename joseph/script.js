var img = document.getElementById('img')
var images = ['africa1.webp', 'africa2.webp','africa3.webp','sunset2.webp','sunset1.jpg']
var x = 0;
function slide (){
    if (x<images.length){
        x = x+1;
    }else{
        x = 1;
    }
    img.innerHTML = "<img src="+images[x-1]+">";
}
setInterval(slide, 3000);

jQuery(document).ready(function () {

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
})    