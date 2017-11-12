function initMap() {
	 var place = {lat: 9.9686197, lng: 76.3144636};
	 var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 18,
     center: place
   });
   var marker = new google.maps.Marker({
		position: place,
		apTypeId: 'satellite',
		itle: 'Log & Planks',
		map: map
   });
 }
 
var vaitoria =  document.getElementById('btnvictorian');
vaitoria.onclick = function(){

	var mainDiv = document.getElementById('productlookimg');
	mainDiv.children[0].src = "images/imp.jpg"
}