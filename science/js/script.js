$(function() {
  $(".mobilebar").click(function(){
    $(".nav-container nav").toggle(300);
    $(".mobilebar i").toggleClass("fa-bars fa-remove");
  });

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

  $("#myBtn").click(function(){
    $('html,body').animate({
      scrollTop: 0
    },800);
  });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
