document.addEventListener('DOMContentLoaded', () => {
  // Utils

  // Convert Photoshop coordinates to Leaflet
  function convertCoords(x, y) {
    return [ mapBounds[ 1 ][ 0 ] - y, x ];
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

  let commsIcon = L.icon({
    iconUrl: 'assets/img/markers/comms.svg',
    ...iconOptions
  });

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

  let mapCommsBridge1 = L.marker(convertCoords(2233, 1155), { icon: commsIcon }).bindPopup('<h1>Resources</h1><p>Bridge</p>');
  let mapCommsBridge2 = L.marker(convertCoords(2271, 1184), { icon: commsIcon }).bindPopup('<h1>Fishy</h1><p>Bridge</p>');
  let mapCommsBridge3 = L.marker(convertCoords(2240, 1217), { icon: commsIcon }).bindPopup('<h1>Sarah</h1><p>Bridge</p>');
  let mapCommsBridge4 = L.marker(convertCoords(2359, 1210), { icon: commsIcon }).bindPopup('<h1>Reunited</h1><p>Bridge</p>');
  let mapCommsBridge5 = L.marker(convertCoords(2335, 1286), { icon: commsIcon }).bindPopup('<h1>Maral</h1><p>Bridge</p>');
  let mapCommsBridge6 = L.marker(convertCoords(2229, 1338), { icon: commsIcon }).bindPopup('<h1>Marauders</h1><p>Bridge</p>');
  let mapCommsHostiles1 = L.marker(convertCoords(1630, 2257), { icon: commsIcon }).bindPopup('<h1>Negotiations</h1><p>Hostiles</p>');
  let mapCommsHostiles2 = L.marker(convertCoords(456, 1283), { icon: commsIcon }).bindPopup('<h1>Tech</h1><p>Hostiles</p>');
  let mapCommsHostiles3 = L.marker(convertCoords(2721, 1379), { icon: commsIcon }).bindPopup('<h1>Meret</h1><p>Hostiles</p>');
  let mapCommsHostiles4 = L.marker(convertCoords(2869, 1185), { icon: commsIcon }).bindPopup('<h1>Collab</h1><p>Hostiles</p>');
  let mapCommsHostiles5 = L.marker(convertCoords(3556, 1326), { icon: commsIcon }).bindPopup('<h1>Clinic</h1><p>Hostiles</p>');
  let mapCommsHostiles6 = L.marker(convertCoords(3700, 1257), { icon: commsIcon }).bindPopup('<h1>Attack</h1><p>Hostiles</p>');
  let mapCommsHostiles7 = L.marker(convertCoords(3558, 1005), { icon: commsIcon }).bindPopup('<h1>SFX</h1><p>Hostiles</p>');
  let mapCommsHostiles8 = L.marker(convertCoords(3793, 1049), { icon: commsIcon }).bindPopup('<h1>Director</h1><p>Hostiles</p>');
  let mapCommsHostiles9 = L.marker(convertCoords(3432, 708), { icon: commsIcon }).bindPopup('<h1>Guard Rails</h1><p>Hostiles</p>');
  let mapCommsFriendly1 = L.marker(convertCoords(383, 1355), { icon: commsIcon }).bindPopup('<h1>Power Stations</h1><p>Friendly</p>');
  let mapCommsFriendly2 = L.marker(convertCoords(740, 856), { icon: commsIcon }).bindPopup('<h1>Expectations</h1><p>Friendly</p>');
  let mapCommsFriendly3 = L.marker(convertCoords(2324, 509), { icon: commsIcon }).bindPopup('<h1>Cleaners</h1><p>Friendly</p>');
  let mapCommsFriendly4 = L.marker(convertCoords(3520, 1548), { icon: commsIcon }).bindPopup('<h1>Sacrifice</h1><p>Friendly</p>');
  let mapCommsHistory1 = L.marker(convertCoords(548, 1663), { icon: commsIcon }).bindPopup('<h1>Territory</h1><p>History</p>');
  let mapCommsHistory2 = L.marker(convertCoords(1466, 1921), { icon: commsIcon }).bindPopup('<h1>Hostage</h1><p>History</p>');
  let mapCommsHistory3 = L.marker(convertCoords(1610, 1445), { icon: commsIcon }).bindPopup('<h1>Ready</h1><p>History</p>');
  let mapCommsHistory4 = L.marker(convertCoords(1172, 1293), { icon: commsIcon }).bindPopup('<h1>Building Bridges</h1><p>History</p>');
  let mapCommsHistory5 = L.marker(convertCoords(1248, 969), { icon: commsIcon }).bindPopup('<h1>Weapons</h1><p>History</p>');
  let mapCommsHistory6 = L.marker(convertCoords(3257, 1247), { icon: commsIcon }).bindPopup('<h1>Police</h1><p>History</p>');
  let mapCommsHistory7 = L.marker(convertCoords(2765, 692), { icon: commsIcon }).bindPopup('<h1>Free</h1><p>History</p>');
  let mapCommsHistory8 = L.marker(convertCoords(3165, 550), { icon: commsIcon }).bindPopup('<h1>Baby</h1><p>History</p>');

  let mapControlPoint1 = L.marker(convertCoords(1676, 1887), { icon: controlPointIcon }).bindPopup('<h1>Cadman Plaza</h1><p>Rikers</p>');
  let mapControlPoint2 = L.marker(convertCoords(1519, 697), { icon: controlPointIcon }).bindPopup('<h1>Fulton Ferry Market</h1><p>Rikers</p>');
  let mapControlPoint3 = L.marker(convertCoords(2692, 541), { icon: controlPointIcon }).bindPopup('<h1>The Warehouse</h1><p>Cleaners</p>');
  let mapControlPoint4 = L.marker(convertCoords(3241, 1101), { icon: controlPointIcon }).bindPopup('<h1>The Farm</h1><p>Cleaners</p>');

  let mapHunterCipher = L.marker(convertCoords(2017, 636), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Cipher</h1><p>Shoot the word "ROBOTO" on the AC units and the Hunter will spawn.</p></p><p><a href="https://redd.it/1kx76zh">Full guide.</a></p>');
  let mapHunterLumen = L.marker(convertCoords(1792, 745), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Lumen</h1><p>Trip the switch inside the garage and follow the UV lights. The Hunter will spawn at the final location.</p><p><a href="https://redd.it/1kwzqez">Full guide.</a></p>');
  let mapHunterMerry = L.marker(convertCoords(1917, 323), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Merry</h1><p><a href="https://redd.it/1kx6yjh">Full guide.</a></p>');
  let mapHunterNecronos = L.marker(convertCoords(2886, 588), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Necronos</h1><p><a href="https://redd.it/1kyek7o">Full guide.</a></p>');
  let mapHunterRedtail = L.marker(convertCoords(2898, 823), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Redtail</h1><p><a href="https://redd.it/1kx49yp">Full guide.</a></p>');
  let mapHunterTracker = L.marker(convertCoords(3507, 1145), { icon: hunterIcon })
    .bindPopup('<h1>Hunter: Tracker</h1><p><a href="https://redd.it/1kye8fv">Full guide.</a></p>');

  let mapMission1 = L.marker(convertCoords(656, 1364), { icon: missionIcon }).bindPopup('<h1>Bridge Park Pier</h1><p>Mission</p>');
  let mapMission2 = L.marker(convertCoords(1044, 2025), { icon: missionIcon }).bindPopup('<h1>Clark Street</h1><p>Mission</p>');
  let mapMission3 = L.marker(convertCoords(3715, 902), { icon: missionIcon }).bindPopup('<h1>DUMBO Skate Park</h1><p>Mission</p>');
  let mapMission4 = L.marker(convertCoords(3581, 1535), { icon: missionIcon }).bindPopup('<h1>CERA Clinic</h1><p>Mission</p>');

  let mapNamedElite1 = L.marker(convertCoords(771, 1259), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite2 = L.marker(convertCoords(1086, 548), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite3 = L.marker(convertCoords(1145, 1071), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite4 = L.marker(convertCoords(2013, 310), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite5 = L.marker(convertCoords(3403, 590), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');
  let mapNamedElite6 = L.marker(convertCoords(2710, 1417), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1><p>Underground</p>');
  let mapNamedElite7 = L.marker(convertCoords(3241, 1489), { icon: namedEliteIcon }).bindPopup('<h1>Named Elite</h1>');

  let mapSafeHouse1 = L.marker(convertCoords(1162, 1291), { icon: safeHouseIcon }).bindPopup('<h1>The Lookout</h1><p>Safe House</p>');
  let mapSafeHouse2 = L.marker(convertCoords(3178, 517), { icon: safeHouseIcon }).bindPopup('<h1>The Retreat</h1><p>Safe House</p>');

  let mapSettlement1 = L.marker(convertCoords(2305, 1244), { icon: settlementBridgeIcon }).bindPopup('<h1>The Bridge</h1><p>Settlement</p>');

  // Markers: Overlays

  let mapComms = L.layerGroup([
    mapCommsBridge1, mapCommsBridge2, mapCommsBridge3, mapCommsBridge4, mapCommsBridge5, mapCommsBridge6,
    mapCommsHostiles1, mapCommsHostiles2, mapCommsHostiles3, mapCommsHostiles4, mapCommsHostiles5, mapCommsHostiles6, mapCommsHostiles7, mapCommsHostiles8, mapCommsHostiles9,
    mapCommsFriendly1, mapCommsFriendly2, mapCommsFriendly3, mapCommsFriendly4,
    mapCommsHistory1, mapCommsHistory2, mapCommsHistory3, mapCommsHistory4, mapCommsHistory5, mapCommsHistory6, mapCommsHistory7, mapCommsHistory8
  ]);
  let mapControlPoints = L.layerGroup([ mapControlPoint1, mapControlPoint2, mapControlPoint3, mapControlPoint4 ]);
  let mapHunters = L.layerGroup([ mapHunterCipher, mapHunterLumen, mapHunterMerry, mapHunterNecronos, mapHunterRedtail, mapHunterTracker ]);
  let mapMissions = L.layerGroup([ mapMission1, mapMission2, mapMission3, mapMission4 ]);
  let mapNamedElites = L.layerGroup([ mapNamedElite1, mapNamedElite2, mapNamedElite3, mapNamedElite4, mapNamedElite5, mapNamedElite6, mapNamedElite7 ]);
  let mapSafeHouses = L.layerGroup([ mapSafeHouse1, mapSafeHouse2 ]);
  let mapSettlements = L.layerGroup([ mapSettlement1 ]);

  let mapOverlays = {
    'Comms': mapComms,
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
  mapComms.addTo(map);
  mapControlPoints.addTo(map);
  mapHunters.addTo(map);
  mapMissions.addTo(map);
  mapNamedElites.addTo(map);
  mapSafeHouses.addTo(map);
  mapSettlements.addTo(map);
});
