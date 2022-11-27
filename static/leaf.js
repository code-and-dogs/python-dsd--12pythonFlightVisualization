var mymap = L.map('mapid').setView([49.399482163452944, 13.473201829182102], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

mapMarkers1 = [];
mapMarkers2 = [];
mapMarkers3 = [];
mapMarkers4 = [];
mapMarkers5 = [];

var flightIcon = L.icon({
  iconUrl: 'static/airplane.png',
  iconSize:     [30, 30], // size of the icon
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var source = new EventSource('/topic/flightdata'); 
source.addEventListener('message', function(e){

  console.log('Message');
  obj = JSON.parse(e.data);
  console.log(obj);

  if(obj.airline == 'Ryanair') {
    for (var i = 0; i < mapMarkers1.length; i++) {
      mymap.removeLayer(mapMarkers1[i]);
    }
    marker1 = L.marker([obj.latitude, obj.longitude], {icon: flightIcon}).addTo(mymap);
    if (mapMarkers1.length > 0) {
      line1 = L.polyline([mapMarkers1[mapMarkers1.length-1].getLatLng(),marker1.getLatLng()], {color:'blue'}).addTo(mymap);

    }
    mapMarkers1.push(marker1);
  }

  if(obj.airline == 'Turkish Airlines') {
    for (var i = 0; i < mapMarkers2.length; i++) {
      mymap.removeLayer(mapMarkers2[i]);
    }
    marker2 = L.marker([obj.latitude, obj.longitude], {icon: flightIcon}).addTo(mymap);
    if (mapMarkers2.length > 0) {
      line2 = L.polyline([mapMarkers2[mapMarkers2.length-1].getLatLng(),marker2.getLatLng()], {color:'red'}).addTo(mymap);
    }
    mapMarkers2.push(marker2);
  }

  if(obj.airline == 'British Airways') {
    for (var i = 0; i < mapMarkers3.length; i++) {
      mymap.removeLayer(mapMarkers3[i]);
    }
    marker3 = L.marker([obj.latitude, obj.longitude], {icon: flightIcon}).addTo(mymap);
    if (mapMarkers3.length > 0) {
      line3 = L.polyline([mapMarkers3[mapMarkers3.length-1].getLatLng(),marker3.getLatLng()], {color:'black'}).addTo(mymap);
    }
    mapMarkers3.push(marker3);
  }

  if(obj.airline == 'Emirates') {
    for (var i = 0; i < mapMarkers4.length; i++) {
      mymap.removeLayer(mapMarkers4[i]);
    }
    marker4 = L.marker([obj.latitude, obj.longitude], {icon: flightIcon}).addTo(mymap);
    if (mapMarkers4.length > 0) {
      line4 = L.polyline([mapMarkers4[mapMarkers4.length-1].getLatLng(),marker4.getLatLng()], {color:'green'}).addTo(mymap);
    }
    mapMarkers4.push(marker4);
  }

  if(obj.airline == 'Lufthansa') {
    for (var i = 0; i < mapMarkers5.length; i++) {
      mymap.removeLayer(mapMarkers5[i]);
    }
    marker5 = L.marker([obj.latitude, obj.longitude], {icon: flightIcon}).addTo(mymap);
    if (mapMarkers5.length > 0) {
      line5 = L.polyline([mapMarkers5[mapMarkers5.length-1].getLatLng(),marker5.getLatLng()], {color:'yellow'}).addTo(mymap);
    }
    mapMarkers5.push(marker5);
  }
}, false);
