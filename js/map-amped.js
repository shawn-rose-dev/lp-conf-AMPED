/*Custom OSV AMPED MAP
 * 2016 - SR
*/ 




  var map;
      function initMap() {

  		var myLatLng = {lat: 41.851908, lng: -87.6117355};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 15,
          styles: [ { "featureType": "water", "stylers": [ { "color": "#000000" } ] },{ "featureType": "road", "stylers": [ { "color": "#808080" }, { "visibility": "simplified" } ] },{ "featureType": "poi", "stylers": [ { "color": "#bababa" } ] },{ "featureType": "landscape", "stylers": [ { "color": "#6a6867" } ] },{ },{ "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#bd722e" } ] },{ "featureType": "poi", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] },{ "featureType": "transit", "stylers": [ { "visibility": "simplified" } ] },{ "elementType": "labels.text", "stylers": [ { "visibility": "simplified" }, { "color": "#808080" } ] },{ "elementType": "labels.icon", "stylers": [ { "color": "#808080" }, { "visibility": "off" } ] },{ "featureType": "water", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "elementType": "labels.text", "stylers": [ { "visibility": "simplified" }, { "color": "#ffffff" } ] },
          { "featureType": "poi", "stylers": [ { "color": "#808080" } ] },{ "featureType": "transit" }, //show transit-lines
		  { "featureType": "transit.line", "stylers": [ { "visibility": "off" } ] } ] 
        });

        var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+

      '<h1 id="firstHeading" class="firstHeading">ARIE CROWN THEATER</h1>'+

      '<div id="bodyContent">'+

      '<h2>McCormick Place</h2> ' +

      '<hr></hr> ' +
      
      '<p>2301 S Lake Shore Dr.</br>'+
       'Chicago, IL 60616</p>'+


        '<h3>DROP OFF AT GATE 37</h2> ' +

      '</div>'+
      '</div>';


	 var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: "images/1607-wd-rising-map-pin.png",
          title: 'Arie Crown Theater '
        });


       var infowindow = new google.maps.InfoWindow({
           content: contentString,
        });

	  marker.addListener('click', function() {
    	infowindow.open(map, marker);
  });

	

      }