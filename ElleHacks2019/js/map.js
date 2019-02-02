var map;

function initMap() {
    // map options
    var options = {
        center: {lat: 43.648640, lng: -79.397209},
        zoom: 16,
        disableDefaultUI: true,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                      { visibility: "off" }
                ]
            },
            // {
            //   featureType: 'poi.park',
            //   elementType: 'geometry',
            //   stylers: [{color: '#263c3f'}]
            // },
            // {
            //   featureType: 'poi.park',
            //   elementType: 'labels.text.fill',
            //   stylers: [{color: '#6b9a76'}]
            // },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    }
    // new map
    map = new google.maps.Map(document.getElementById('map'), options);

    // add marker variable
    var queenSpadinaMedCentre = {lat: 43.648640, lng: -79.397209};

    var QSMC = new google.maps.Marker({
        position: queenSpadinaMedCentre,
        map: map,
        icon: 'images/shelter.png'
    });

    var infoWindow = new google.maps.InfoWindow({
        content:'<h2>Queen and Spadina Medical Center</h2><br>Beds Available: 3<br>Contact: 647 836 3392',
    });

    QSMC.addListener('click', function(){
        infoWindow.open(map, QSMC);
    });
}




map.data.loadGeoJson('dataFiles/data.json');
