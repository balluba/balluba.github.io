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
  });
});

$(function() {
  $(".india").click(function(){
    $(".toggleIndia").css('display','block');
    $(".toggleManipur").css('display','none');
    $(".india").addClass("selected");
    $(".manipur").removeClass("selected");
  });
});
