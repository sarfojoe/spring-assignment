(function () {
    var itemClassName = 'slider__photo';
        items = document.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0;

    // Set event listeners
    function setEventListeners() {
        var next = document.getElementsByClassName('slider__button--next')[0],
            prev = document.getElementsByClassName('slider__button--prev')[0];

        next.addEventListener('click', getNext);
        prev.addEventListener('click', getPrev);
    }

    function getNext() {
        document.getElementsByClassName('slider__photo')[slide].classList.remove('active');

        slide = (slide === totalItems - 1) ? 0 : (slide + 1);

        document.getElementsByClassName('slider__photo')[slide].classList.add('active');
        

        
    }
    
    
 
    function getPrev(){
        document.getElementsByClassName('slider__photo')[slide].classList.remove('active');

        if (slide === 0) {
            slide = document.getElementsByClassName('slider__photo').length - 1;
        } else {
            slide--;
        }
        document.getElementsByClassName('slider__photo')[slide].classList.add('active');
    }

    function initSlider() {
        // setInitialClasses();
        setEventListeners();
        
        // Set moving to false so that the slider becomes interactive
        moving = false;
       
    }
    $(function autoplay(){
    setInterval(function () {
      if ($('.slider:hover').length == 0) {
        getNext();
      }
    }, 6000);
   
 
  });

    initSlider();
})();






jQuery(document).ready(function() {
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0},'300');
  });
});

 $(document).ready(function() {
    $("#icon").hide( function(){$("#icon").slideDown(3000);}) ;

  });

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeInCirc",
    duration: 950,
    delay: (el, i) => 100*i
  });


  
 