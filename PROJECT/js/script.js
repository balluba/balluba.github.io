$(".drop").click(function(){
  $(".content").toggle(300);
  $(".link").toggleClass("fa-ellipsis-v fa-ellipsis-h");
});

$(".hover_menu").click(function(){
  $(".pc_nav").toggle(400);
  $(".hover_menu i").toggleClass("fa-bars fa-remove");
});
