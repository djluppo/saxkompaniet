function myMap() {
var myCenter = new google.maps.LatLng(60.1210352,11.4670500);
var mapCanvas = document.getElementById("map");
var mapOptions = {center: myCenter, zoom: 9};
var map = new google.maps.Map(mapCanvas, mapOptions);
var marker = new google.maps.Marker({position:myCenter});
 marker.setMap(map);
					}