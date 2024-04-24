const mymap = L.map("mapid").setView([52.49065, 13.44831], 16);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v12",
    accessToken:
      "pk.eyJ1IjoibGVybndlcmtzdGF0dCIsImEiOiJjbHZlZTV4aGYwODB0MmlwcjZobTNvdXh0In0.eAgHJ3c0Yl5XahdyJQWcYQ",
  }
).addTo(mymap);

const marker = L.marker([52.49065, 13.44831], {
  title: "Die Lernwerkstatt",
  alt: "Die Lernwerkstatt",
}).addTo(mymap);
marker.bindPopup("<b>Hallo!</b><br>Besuch uns mal!").openPopup();
