document.addEventListener('DOMContentLoaded', () => {
  // Utils

  // Convert Photoshop coordinates to Leaflet
  function convertCoords(x, y, height) {
    return [ height - y, x ];
  }

  // Config

  let mapBounds = [
    [ 0, 0 ],
    [ 2600, 4100 ]
  ];

  let map = L.map('map', {
    crs: L.CRS.Simple,
    center: [ (mapBounds[ 1 ][ 0 ] / 2), (mapBounds[ 1 ][ 1 ] / 2) ],
    zoom: -1,       // Initial zoom
    minZoom: -1.75, // Most zoomed out
    maxZoom: 1,     // Most zoomed in
    zoomSnap: 0.1,
    zoomDelta: 0.1,
    zoomControl: false,
    attributionControl: false
  });

  // Markers: Icons

  let iconOptions = {
    iconSize: [ 32, 32 ],
    iconAnchor: [ 16, 32 ],
    popupAnchor: [ 0, -32 ]
  };

  let controlPointIcon = L.icon({
    iconUrl: 'assets/img/markers/control-point.svg',
    ...iconOptions
  });

  let hunterIcon = L.icon({
    iconUrl: 'assets/img/markers/hunter.png',
    ...iconOptions
  });

  let missionIcon = L.icon({
    iconUrl: 'assets/img/markers/mission.svg',
    ...iconOptions
  });

  let namedEliteIcon = L.icon({
    iconUrl: 'assets/img/markers/named-elite.png',
    ...iconOptions
  });

  let safeHouseIcon = L.icon({
    iconUrl: 'assets/img/markers/safe-house.svg',
    ...iconOptions
  });

  let settlementBridgeIcon = L.icon({
    iconUrl: 'assets/img/markers/bridge.svg',
    ...iconOptions
  });

  // Markers: Definitions

  let mapControlPoint1 = L.marker(convertCoords(1676, 1887, mapBounds[ 1 ][ 0 ]), { icon: controlPointIcon }).bindPopup('<h1>Cadman Plaza</h1><p>Rikers</p>');
  let mapControlPoint2 = L.marker(convertCoords(1519, 697, mapBounds[ 1 ][ 0 ]), { icon: controlPointIcon }).bindPopup('<h1>Fulton Ferry Market</h1><p>Rikers</p>');
  let mapControlPoint3 = L.marker(convertCoords(2692, 541, mapBounds[ 1 ][ 0 ]), { icon: controlPointIcon }).bindPopup('<h1>The Warehouse</h1><p>Cleaners</p>');
  let mapControlPoint4 = L.marker(convertCoords(3241, 1101, mapBounds[ 1 ][ 0 ]), { icon: controlPointIcon }).bindPopup('<h1>The Farm</h1><p>Cleaners</p>');

  let mapHunterCipher = L.marker(convertCoords(2017, 636, mapBounds[ 1 ][ 0 ]), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Cipher</h1><p>Shoot the word "ROBOTO" on the AC units and the Hunter will spawn.</p></p><p><a href="https://redd.it/1kx76zh">Full guide.</a></p>');
  let mapHunterLumen = L.marker(convertCoords(1792, 745, mapBounds[ 1 ][ 0 ]), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Lumen</h1><p>Trip the switch inside the garage and follow the UV lights. The Hunter will spawn at the final location.</p><p><a href="https://redd.it/1kwzqez">Full guide.</a></p>');
  let mapHunterMerry = L.marker(convertCoords(1917, 323, mapBounds[ 1 ][ 0 ]), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Merry</h1><p><a href="https://redd.it/1kx6yjh">Full guide.</a></p>');
  let mapHunterNecronos = L.marker(convertCoords(2886, 588, mapBounds[ 1 ][ 0 ]), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Necronos</h1><p><a href="https://redd.it/1kyek7o">Full guide.</a></p>');
  let mapHunterRedtail = L.marker(convertCoords(2898, 823, mapBounds[ 1 ][ 0 ]), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Redtail</h1><p><a href="https://redd.it/1kx49yp">Full guide.</a></p>');
  let mapHunterTracker = L.marker(convertCoords(3507, 1145, mapBounds[ 1 ][ 0 ]), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Tracker</h1><p><a href="https://redd.it/1kye8fv">Full guide.</a></p>');

  let mapMission1 = L.marker(convertCoords(656, 1364, mapBounds[ 1 ][ 0 ]), { icon: missionIcon }).bindPopup('<h1>Bridge Park Pier</h1><p>Mission</p>');
  let mapMission2 = L.marker(convertCoords(1044, 2025, mapBounds[ 1 ][ 0 ]), { icon: missionIcon }).bindPopup('<h1>Clark Street</h1><p>Mission</p>');
  let mapMission3 = L.marker(convertCoords(3715, 902, mapBounds[ 1 ][ 0 ]), { icon: missionIcon }).bindPopup('<h1>DUMBO Skate Park</h1><p>Mission</p>');
  let mapMission4 = L.marker(convertCoords(3581, 1535, mapBounds[ 1 ][ 0 ]), { icon: missionIcon }).bindPopup('<h1>CERA Clinic</h1><p>Mission</p>');

  let mapNamedElite1 = L.marker(convertCoords(771, 1259, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite2 = L.marker(convertCoords(1086, 548, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite3 = L.marker(convertCoords(1145, 1071, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite4 = L.marker(convertCoords(2013, 310, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite5 = L.marker(convertCoords(3403, 590, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite6 = L.marker(convertCoords(2710, 1417, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1><p>Underground</p>');
  let mapNamedElite7 = L.marker(convertCoords(3241, 1489, mapBounds[ 1 ][ 0 ]), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');

  let mapSafeHouse1 = L.marker(convertCoords(1162, 1291, mapBounds[ 1 ][ 0 ]), { icon: safeHouseIcon }).bindPopup('<h1>The Lookout</h1><p>Safe House</p>');
  let mapSafeHouse2 = L.marker(convertCoords(3178, 517, mapBounds[ 1 ][ 0 ]), { icon: safeHouseIcon }).bindPopup('<h1>The Retreat</h1><p>Safe House</p>');

  let mapSettlement1 = L.marker(convertCoords(2305, 1244, mapBounds[ 1 ][ 0 ]), { icon: settlementBridgeIcon }).bindPopup('<h1>The Bridge</h1><p>Settlement</p>');

  // Markers: Overlays

  let mapControlPoints = L.layerGroup([ mapControlPoint1, mapControlPoint2, mapControlPoint3, mapControlPoint4 ]);
  let mapHunters = L.layerGroup([ mapHunterCipher, mapHunterLumen, mapHunterMerry, mapHunterNecronos, mapHunterRedtail, mapHunterTracker ]);
  let mapMissions = L.layerGroup([ mapMission1, mapMission2, mapMission3, mapMission4 ]);
  let mapNamedElites = L.layerGroup([ mapNamedElite1, mapNamedElite2, mapNamedElite3, mapNamedElite4, mapNamedElite5, mapNamedElite6, mapNamedElite7 ]);
  let mapSafeHouses = L.layerGroup([ mapSafeHouse1, mapSafeHouse2 ]);
  let mapSettlements = L.layerGroup([ mapSettlement1 ]);

  let mapOverlays = {
    'Control Points': mapControlPoints,
    'Hunters': mapHunters,
    'Missions': mapMissions,
    'Named Elites': mapNamedElites,
    'Safe Houses': mapSafeHouses,
    'Settlements': mapSettlements
  };

  let layerControl = L.control.layers({}, mapOverlays, { position: 'topleft' }).addTo(map);

  // Markers: Sidebar filters

  // Sync layer state
  map.on('overlayadd overlayremove', (e) => {
    const CHK_EL = document.querySelector(`.filters input[data-layer="${e.name}"]`);
    if (CHK_EL) CHK_EL.checked = (e.type === 'overlayadd');
  });

  document.querySelectorAll('.filters input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', function () {
      const LAYER_ID = this.dataset.layer;
      this.checked ? mapOverlays[ LAYER_ID ].addTo(map) : mapOverlays[ LAYER_ID ].removeFrom(map);
    });
  });

  // Initialize map

  L.control.zoom({ position: 'bottomleft' }).addTo(map);
  L.imageOverlay('assets/img/map.jpg', mapBounds).addTo(map);
  map.setMaxBounds(mapBounds);

  // Layers displayed by default
  mapControlPoints.addTo(map);
  mapHunters.addTo(map);
  mapMissions.addTo(map);
  mapNamedElites.addTo(map);
  mapSafeHouses.addTo(map);
  mapSettlements.addTo(map);
});
