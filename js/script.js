$(function() {
  $(".drop").click(function(){
    $(".content").toggle(300);
    $(".link").toggleClass("fa-ellipsis-v fa-ellipsis-h");
  });

  $(".hover_menu").click(function(){
    $(".pc_nav").toggle(400);
    $(".hover_menu i").toggleClass("fa-bars fa-remove");
  });

  // smooth scroll
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });

// main slide
  var backgrounds = [
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(image/front.jpg)',
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(image/front2.jpeg)',
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(image/front13.jpeg)'];
  var imgIdx = 0;
  var dots = document.getElementsByClassName('dots');
  function swapBackgrounds() {
    if(++imgIdx >= backgrounds.length) {
      imgIdx = 0;
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dotsActive", "");
    }
    $('.main_visual_container').fadeTo(2000, 0.7,function(){
      $(this).css('background-image',backgrounds[imgIdx]).fadeTo(2000,1);
      dots[imgIdx].className += " dotsActive";
    });
  }
  setInterval(swapBackgrounds, 5000);
});

// go to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// google map
function initialize() {
  var latlng = new google.maps.LatLng(12.972442, 77.580643);
  var myOptions = {
    zoom: 13,
    center: latlng,
    navigationControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
}

// success slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("success_details");
    var dots = document.getElementsByClassName("su_dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotsActive", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dotsActive";
    setTimeout(showSlides, 5000);
}
