var map = L.map("map").setView([41.8236016, 12.1781378], 9);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyc3BvcnRpbGxvIiwiYSI6ImNsM2VndG44NzBpNm8zY3B2ODNpOGxuOGEifQ.2SdFxPS5aggpjjSzu3hBGQ",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "your.mapbox.access.token",
  }
).addTo(map);
