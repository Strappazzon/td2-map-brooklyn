document.addEventListener("DOMContentLoaded", () => {
  // Utils

  // Convert Photoshop coordinates to Leaflet
  function convertCoords(x, y, height) {
    return [ height - y, x ];
  }

  // Icons

  let controlPointIcon = L.icon({
    iconUrl: '/assets/img/markers/control-point.svg',
    iconSize: [ 32, 32 ],
    iconAnchor: [ 16, 32 ],
    popupAnchor: [ 0, -32 ]
  });

  let missionIcon = L.icon({
    iconUrl: '/assets/img/markers/mission.svg',
    iconSize: [ 32, 32 ],
    iconAnchor: [ 16, 32 ],
    popupAnchor: [ 0, -32 ]
  });

  let namedEliteIcon = L.icon({
    iconUrl: '/assets/img/markers/named-elite.svg',
    iconSize: [ 32, 32 ],
    iconAnchor: [ 16, 32 ],
    popupAnchor: [ 0, -32 ]
  });

  let safeHouseIcon = L.icon({
    iconUrl: '/assets/img/markers/safe-house.svg',
    iconSize: [ 32, 32 ],
    iconAnchor: [ 16, 32 ],
    popupAnchor: [ 0, -32 ]
  });

  let settlementBridgeIcon = L.icon({
    iconUrl: '/assets/img/markers/bridge.svg',
    iconSize: [ 32, 32 ],
    iconAnchor: [ 16, 32 ],
    popupAnchor: [ 0, -32 ]
  });

  // Config

  let map = L.map('map', {
    crs: L.CRS.Simple,
    center: [ 426, 714 ],
    zoom: 0,
    minZoom: -1,
    maxZoom: 0,
    zoomSnap: 0.15,
    zoomDelta: 0.15,
    zoomControl: false,
    attributionControl: false
  });

  let mapBounds = [ [ 0, 0 ], [ 1724, 2856 ] ];

  L.control.zoom({ position: 'bottomleft' }).addTo(map);
  L.imageOverlay('/assets/img/map.jpg', mapBounds).addTo(map);
  map.fitBounds(mapBounds);

  // Markers: Definitions

  let mapControlPoint1 = L.marker(convertCoords(1428, 1274, mapBounds[ 1 ][ 0 ]), { icon: controlPointIcon }).bindPopup("<h1>Cadman Plaza</h1><p>Rikers</p>");
  let mapControlPoint2 = L.marker(convertCoords(1135, 542, mapBounds[ 1 ][ 0 ]), { icon: controlPointIcon }).bindPopup("<h1>Fulton Ferry Market</h1><p>Rikers</p>");
  let mapControlPoint3 = L.marker(convertCoords(1874, 288, mapBounds[ 1 ][ 0 ]), { icon: controlPointIcon }).bindPopup("<h1>The Warehouse</h1><p>Cleaners</p>");
  let mapControlPoint4 = L.marker(convertCoords(2305, 544, mapBounds[ 1 ][ 0 ]), { icon: controlPointIcon }).bindPopup("<h1>The Farm</h1><p>Cleaners</p>");

  let mapMission1 = L.marker(convertCoords(649, 1095, mapBounds[ 1 ][ 0 ]), { icon: missionIcon }).bindPopup("<h1>Bridge Park Pier</h1><p>Mission</p>");
  let mapMission2 = L.marker(convertCoords(1011, 1473, mapBounds[ 1 ][ 0 ]), { icon: missionIcon }).bindPopup("<h1>Clark Street</h1><p>Mission</p>");
  let mapMission3 = L.marker(convertCoords(2577, 361, mapBounds[ 1 ][ 0 ]), { icon: missionIcon }).bindPopup("<h1>DUMBO Skate Park</h1><p>Mission</p>");
  let mapMission4 = L.marker(convertCoords(2573, 786, mapBounds[ 1 ][ 0 ]), { icon: missionIcon }).bindPopup("<h1>CERA Clinic</h1><p>Mission</p>");

  let mapNamedElite1 = L.marker(convertCoords(686, 1004, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup("<h1>Named Elite</h1>");
  let mapNamedElite2 = L.marker(convertCoords(933, 836, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup("<h1>Named Elite</h1>");
  let mapNamedElite3 = L.marker(convertCoords(815, 505, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup("<h1>Named Elite</h1>");
  let mapNamedElite4 = L.marker(convertCoords(1390, 217, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup("<h1>Named Elite</h1>");
  let mapNamedElite5 = L.marker(convertCoords(2340, 215, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup("<h1>Named Elite</h1>");
  let mapNamedElite6 = L.marker(convertCoords(1992, 836, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup("<h1>Named Elite</h1><p>Underground</p>");
  let mapNamedElite7 = L.marker(convertCoords(2366, 809, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup("<h1>Named Elite</h1>");

  let mapSafeHouse1 = L.marker(convertCoords(970, 970, mapBounds[ 1 ][ 0 ]), { icon: safeHouseIcon }).bindPopup("<h1>The Lookout</h1><p>Safe House</p>");
  let mapSafeHouse2 = L.marker(convertCoords(2210, 180, mapBounds[ 1 ][ 0 ]), { icon: safeHouseIcon }).bindPopup("<h1>The Retreat</h1><p>Safe House</p>");

  let mapSettlement1 = L.marker(convertCoords(1710, 815, mapBounds[ 1 ][ 0 ]), { icon: settlementBridgeIcon }).bindPopup("<h1>The Bridge</h1><p>Settlement</p>");

  // Markers: Overlays

  let mapControlPoints = L.layerGroup([ mapControlPoint1, mapControlPoint2, mapControlPoint3, mapControlPoint4 ]);
  let mapMissions = L.layerGroup([ mapMission1, mapMission2, mapMission3, mapMission4 ]);
  let mapNamedElites = L.layerGroup([ mapNamedElite1, mapNamedElite2, mapNamedElite3, mapNamedElite4, mapNamedElite5, mapNamedElite6, mapNamedElite7 ]);
  let mapSafeHouses = L.layerGroup([ mapSafeHouse1, mapSafeHouse2 ]);
  let mapSettlements = L.layerGroup([ mapSettlement1 ]);

  let mapOverlays = {
    'Control Points': mapControlPoints,
    'Missions': mapMissions,
    'Named Elites': mapNamedElites,
    'Safe Houses': mapSafeHouses,
    'Settlements': mapSettlements
  };

  let layerControl = L.control.layers({}, mapOverlays, { position: 'topleft' }).addTo(map);

  // Layers displayed by default
  mapControlPoints.addTo(map);
  mapMissions.addTo(map);
  mapNamedElites.addTo(map);
  mapSafeHouses.addTo(map);
  mapSettlements.addTo(map);
});
