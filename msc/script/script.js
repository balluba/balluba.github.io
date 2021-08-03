$(function() {
  $("#bars").click(function(){
    $(".side_nav").toggle(300);
    $("#bars i").toggleClass("fa-bars fa-remove");
  });
});


$(function() {
  $(".manipur").click(function(){
    $(".toggleManipur").css('display','block');
    $(".toggleIndia").css('display','none');
    $(".manipur").addClass("selected");
    $(".india").removeClass("selected");
    $(".in").css('display','none');
    $(".mn").css('display','inline-block');
  });
});

$(function() {
  $(".india").click(function(){
    $(".toggleIndia").css('display','block');
    $(".toggleManipur").css('display','none');
    $(".india").addClass("selected");
    $(".manipur").removeClass("selected");
    $(".in").css('display','inline-block');
    $(".mn").css('display','none');
  });
});

$(document).ready(function() {
  $(".set > span").on("click", function() {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > span i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > span i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > span").removeClass("act");
      $(this).addClass("act");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});
