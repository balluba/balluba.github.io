$(".drop").click(function(){
  $(".content").toggle(300);
  $(".link").toggleClass("fa-ellipsis-v fa-ellipsis-h");
});

$(".hover_menu").click(function(){
  $(".pc_nav").toggle(400);
  $(".hover_menu i").toggleClass("fa-bars fa-remove");
});

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
