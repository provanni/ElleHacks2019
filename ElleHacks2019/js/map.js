var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 43.666452, lng: -79.388444},
         zoom: 17
    });
}

map.data.loadGeoJson('dataFiles/data.json');