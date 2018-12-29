const mymap = L.map("mapid").setView([52.49065, 13.44831], 16);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoic3Rhcm1hZXJrZXIiLCJhIjoiY2pqZjZhNDE1MGEyMTN2cXN2cHYyM3J1OCJ9.BhLnttNctRll0LVyaWqu2g"
  }
).addTo(mymap);

const marker = L.marker([52.49065, 13.44831], {
  title: "Lernwerkstatt",
  alt: "Lernwerkstatt"
}).addTo(mymap);
marker.bindPopup("<b>Hallo!</b><br>Besuch uns mal!").openPopup();
