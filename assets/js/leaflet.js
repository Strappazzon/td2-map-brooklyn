document.addEventListener('DOMContentLoaded', () => {
  // Utils

  // Convert Photoshop coordinates to Leaflet
  function convertCoords(x, y) {
    return [ mapBounds[ 1 ][ 0 ] - y, x ];
  }

  // Convert Markdown to HTML
  const md = window.markdownit({
    breaks: true,
    html: true,
    quotes: '""\'\'',
  });

  // Lightbox options
  const lightboxOptions = {
    animationSlide: false,
    captions: false,
    captionsData: 'alt',
    fadeSpeed: 100,
    maxZoom: 2,
    overlayOpacity: 0.9,
    scrollZoom: false,
    sourceAttr: 'src',
    spinner: false,
    showCounter: false,
    swipeClose: false,
    uniqueImages: false
  };

  const LIGHTBOX_SELECTOR = '.leaflet .image-wrapper img';

  // Config

  let mapBounds = [
    [ 0, 0 ],
    [ 2600, 4100 ]
  ];

  const INITIAL_ZOOM = -1;

  let map = L.map('map', {
    crs: L.CRS.Simple,
    center: [ (mapBounds[ 1 ][ 0 ] / 2), (mapBounds[ 1 ][ 1 ] / 2) ],
    zoom: INITIAL_ZOOM,
    minZoom: -1.75, // Most zoomed out
    maxZoom: 1,     // Most zoomed in
    zoomSnap: 0.1,
    zoomDelta: 0.1,
    zoomControl: false,
    attributionControl: true
  });

  // Controls

  let centerViewButton = L.easyButton({
    position: 'bottomleft',
    states: [ {
      stateName: 'center-view',
      icon: '<span aria-hidden="true">&#128205;</span>',
      title: 'Center map',
      onClick: function (btn, map) {
        map.setView(
          [ (mapBounds[ 1 ][ 0 ] / 2), (mapBounds[ 1 ][ 1 ] / 2) ],
          INITIAL_ZOOM
        );
        btn.state('center-view');
      }
    } ]
  });

  // Markers: Icons

  let iconOptions = {
    iconSize: [ 32, 32 ],
    iconAnchor: [ 16, 32 ],
    popupAnchor: [ 0, -32 ]
  };

  let echoIcon = L.icon({
    iconUrl: 'assets/img/markers/echo.svg',
    ...iconOptions
  });

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

  let mapCommsBridge1 = L.marker(convertCoords(2233, 1155), { icon: commsIcon }).bindPopup(md.render('# Resources\n\nBridge'));
  let mapCommsBridge2 = L.marker(convertCoords(2271, 1184), { icon: commsIcon }).bindPopup(md.render('# Fishy\n\nBridge'));
  let mapCommsBridge3 = L.marker(convertCoords(2240, 1217), { icon: commsIcon }).bindPopup(md.render('# Sarah\n\nBridge'));
  let mapCommsBridge4 = L.marker(convertCoords(2359, 1210), { icon: commsIcon }).bindPopup(md.render('# Reunited\n\nBridge'));
  let mapCommsBridge5 = L.marker(convertCoords(2335, 1286), { icon: commsIcon }).bindPopup(md.render('# Maral\n\nBridge'));
  let mapCommsBridge6 = L.marker(convertCoords(2229, 1338), { icon: commsIcon }).bindPopup(md.render('# Marauders\n\nBridge'));
  let mapCommsHostiles1 = L.marker(convertCoords(1630, 2257), { icon: commsIcon }).bindPopup(md.render('# Negotiations\n\nHostiles'));
  let mapCommsHostiles2 = L.marker(convertCoords(456, 1283), { icon: commsIcon }).bindPopup(md.render('# Tech\n\nHostiles'));
  let mapCommsHostiles3 = L.marker(convertCoords(2721, 1379), { icon: commsIcon }).bindPopup(md.render('# Meret\n\nHostiles'));
  let mapCommsHostiles4 = L.marker(convertCoords(2869, 1185), { icon: commsIcon }).bindPopup(md.render('# Collab\n\nHostiles'));
  let mapCommsHostiles5 = L.marker(convertCoords(3556, 1326), { icon: commsIcon }).bindPopup(md.render('# Clinic\n\nHostiles'));
  let mapCommsHostiles6 = L.marker(convertCoords(3700, 1257), { icon: commsIcon }).bindPopup(md.render('# Attack\n\nHostiles'));
  let mapCommsHostiles7 = L.marker(convertCoords(3558, 1005), { icon: commsIcon }).bindPopup(md.render('# SFX\n\nHostiles'));
  let mapCommsHostiles8 = L.marker(convertCoords(3793, 1049), { icon: commsIcon }).bindPopup(md.render('# Director\n\nHostiles'));
  let mapCommsHostiles9 = L.marker(convertCoords(3432, 708), { icon: commsIcon }).bindPopup(md.render('# Guard Rails\n\nHostiles'));
  let mapCommsFriendly1 = L.marker(convertCoords(383, 1355), { icon: commsIcon }).bindPopup(md.render('# Power Stations\n\nFriendly'));
  let mapCommsFriendly2 = L.marker(convertCoords(740, 856), { icon: commsIcon }).bindPopup(md.render('# Expectations\n\nFriendly'));
  let mapCommsFriendly3 = L.marker(convertCoords(2324, 509), { icon: commsIcon }).bindPopup(md.render('# Cleaners\n\nFriendly'));
  let mapCommsFriendly4 = L.marker(convertCoords(3520, 1548), { icon: commsIcon }).bindPopup(md.render('# Sacrifice\n\nFriendly'));
  let mapCommsHistory1 = L.marker(convertCoords(548, 1663), { icon: commsIcon }).bindPopup(md.render('# Territory\n\nHistory'));
  let mapCommsHistory2 = L.marker(convertCoords(1466, 1921), { icon: commsIcon }).bindPopup(md.render('# Hostage\n\nHistory'));
  let mapCommsHistory3 = L.marker(convertCoords(1610, 1445), { icon: commsIcon }).bindPopup(md.render('# Ready\n\nHistory'));
  let mapCommsHistory4 = L.marker(convertCoords(1172, 1293), { icon: commsIcon }).bindPopup(md.render('# Building Bridges\n\nHistory'));
  let mapCommsHistory5 = L.marker(convertCoords(1248, 969), { icon: commsIcon }).bindPopup(md.render('# Weapons\n\nHistory'));
  let mapCommsHistory6 = L.marker(convertCoords(3257, 1247), { icon: commsIcon }).bindPopup(md.render('# Police\n\nHistory'));
  let mapCommsHistory7 = L.marker(convertCoords(2765, 692), { icon: commsIcon }).bindPopup(md.render('# Free\n\nHistory'));
  let mapCommsHistory8 = L.marker(convertCoords(3165, 550), { icon: commsIcon }).bindPopup(md.render('# Baby\n\nHistory'));

  let mapControlPoint1 = L.marker(convertCoords(1676, 1887), { icon: controlPointIcon }).bindPopup(md.render('# Cadman Plaza\n\nRikers'));
  let mapControlPoint2 = L.marker(convertCoords(1519, 697), { icon: controlPointIcon }).bindPopup(md.render('# Fulton Ferry Market\n\nRikers'));
  let mapControlPoint3 = L.marker(convertCoords(2692, 541), { icon: controlPointIcon }).bindPopup(md.render('# The Warehouse\n\nCleaners'));
  let mapControlPoint4 = L.marker(convertCoords(3241, 1101), { icon: controlPointIcon }).bindPopup(md.render('# The Farm\n\nCleaners'));

  // let mapEcho1 = L.marker(convertCoords(0, 0), { icon: echoIcon }).bindPopup(md.render(''));
  // let mapEcho2 = L.marker(convertCoords(0, 0), { icon: echoIcon }).bindPopup(md.render(''));
  let mapEcho3 = L.marker(convertCoords(1710, 277), { icon: echoIcon }).bindPopup(md.render('# Faye\n\n**Requirements:** Collect all 16 Danver\'s Network cards.\n\n[Full guide.](https://redd.it/1kz9y7r)'));

  let mapHunterCipher = L.marker(convertCoords(2017, 636), { icon: hunterIcon })
    .bindPopup(md.render('# Hunter Spawn\n\n**Steps:** Shoot the word "ROBOTO" on the AC units and the Hunter will spawn.\n\n[Full guide.](https://redd.it/1kx76zh)\n\n**Mask:** Cipher'));
  let mapHunterLumen = L.marker(convertCoords(1792, 745), { icon: hunterIcon })
    .bindPopup(md.render('# Hunter Spawn\n\n**Steps:** Trip the switch inside the garage and follow the UV lights. The Hunter will spawn at the final location.\n\n[Full guide.](https://redd.it/1kwzqez)\n\n**Mask:** Lumen'));
  let mapHunterMerry = L.marker(convertCoords(1917, 323), { icon: hunterIcon })
    .bindPopup(md.render('# Hunter Spawn\n\n**Steps:** Pick up the Legs, Torso, Tail and Head of a Merry-Go-Round horse and assemble them at the Merry-Go-Round where then the Hunter will spawn.\n\n[Full guide.](https://redd.it/1kx6yjh)\n\n**Mask:** Merry'));
  let mapHunterNecronos = L.marker(convertCoords(2886, 588), { icon: hunterIcon })
    .bindPopup(md.render('# Hunter Spawn\n\n**Requirements:** Complete all prior 7 Hunter encounters.\n\n**Steps:** [Full guide.](https://redd.it/1kyek7o)\n\n**Mask:** Necronos'));
  let mapHunterRedtail = L.marker(convertCoords(2898, 823), { icon: hunterIcon })
    .bindPopup(md.render('# Hunter Spawn\n\n**Steps:** [Full guide.](https://redd.it/1kx49yp)\n\n**Mask:** Redtail'));
  let mapHunterTracker = L.marker(convertCoords(3507, 1145), { icon: hunterIcon })
    .bindPopup(md.render('# Hunter Spawn\n\n**Steps:** [Full guide.](https://redd.it/1kye8fv)\n\n**Mask:** Tracker'));

  let mapMission1 = L.marker(convertCoords(656, 1364), { icon: missionIcon }).bindPopup(md.render('# Bridge Park Pier\n\n**Type:** World Mission\n\n**Boss:** Bombshell'));
  let mapMission2 = L.marker(convertCoords(1044, 2025), { icon: missionIcon }).bindPopup(md.render('# Clark Street\n\n**Type:** World Mission\n\n**Boss:** Auto'));
  let mapMission3 = L.marker(convertCoords(3715, 902), { icon: missionIcon }).bindPopup(md.render('# DUMBO Skate Park\n\n**Type:** World Mission\n\n**Boss:** Hollings'));
  let mapMission4 = L.marker(convertCoords(3581, 1535), { icon: missionIcon }).bindPopup(md.render('# CERA Clinic\n\n**Type:** World Mission\n\n**Boss:** Stewart'));

  let mapNamedElite1 = L.marker(convertCoords(771, 1259), { icon: namedEliteIcon })
    .bindPopup(md.render('# Named Elite\n\nDanver\'s Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver\'s Network cards.'));
  let mapNamedElite2 = L.marker(convertCoords(1086, 548), { icon: namedEliteIcon })
    .bindPopup(md.render('# Named Elite\n\nDanver\'s Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver\'s Network cards.'));
  let mapNamedElite3 = L.marker(convertCoords(1145, 1071), { icon: namedEliteIcon })
    .bindPopup(md.render('# Named Elite\n\nDanver\'s Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver\'s Network cards.'));
  let mapNamedElite4 = L.marker(convertCoords(2013, 310), { icon: namedEliteIcon })
    .bindPopup(md.render('# Named Elite\n\nDanver\'s Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver\'s Network cards.'));
  let mapNamedElite5 = L.marker(convertCoords(3403, 590), { icon: namedEliteIcon })
    .bindPopup(md.render('# Named Elite\n\nDanver\'s Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver\'s Network cards.'));
  let mapNamedElite6 = L.marker(convertCoords(2710, 1417), { icon: namedEliteIcon })
    .bindPopup(md.render('# Named Elite\n\n**Location:** Underground\n\nDanver Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver\'s Network cards.'));
  let mapNamedElite7 = L.marker(convertCoords(3241, 1489), { icon: namedEliteIcon })
    .bindPopup(md.render('# Named Elite\n\nDanver\'s Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver\'s Network cards.'));

  let mapSafeHouse1 = L.marker(convertCoords(1162, 1291), { icon: safeHouseIcon }).bindPopup(md.render('# The Lookout\n\nSafe House'));
  let mapSafeHouse2 = L.marker(convertCoords(3178, 517), { icon: safeHouseIcon }).bindPopup(md.render('# The Retreat\n\nSafe House'));

  let mapSettlement1 = L.marker(convertCoords(2305, 1244), { icon: settlementBridgeIcon }).bindPopup(md.render('# The Bridge\n\nSettlement'));

  // Markers: Overlays

  let mapComms = L.layerGroup([
    mapCommsBridge1, mapCommsBridge2, mapCommsBridge3, mapCommsBridge4, mapCommsBridge5, mapCommsBridge6,
    mapCommsHostiles1, mapCommsHostiles2, mapCommsHostiles3, mapCommsHostiles4, mapCommsHostiles5, mapCommsHostiles6, mapCommsHostiles7, mapCommsHostiles8, mapCommsHostiles9,
    mapCommsFriendly1, mapCommsFriendly2, mapCommsFriendly3, mapCommsFriendly4,
    mapCommsHistory1, mapCommsHistory2, mapCommsHistory3, mapCommsHistory4, mapCommsHistory5, mapCommsHistory6, mapCommsHistory7, mapCommsHistory8
  ]);
  let mapControlPoints = L.layerGroup([ mapControlPoint1, mapControlPoint2, mapControlPoint3, mapControlPoint4 ]);
  let mapEcho = L.layerGroup([ mapEcho3 ]);
  let mapHunters = L.layerGroup([ mapHunterCipher, mapHunterLumen, mapHunterMerry, mapHunterNecronos, mapHunterRedtail, mapHunterTracker ]);
  let mapMissions = L.layerGroup([ mapMission1, mapMission2, mapMission3, mapMission4 ]);
  let mapNamedElites = L.layerGroup([ mapNamedElite1, mapNamedElite2, mapNamedElite3, mapNamedElite4, mapNamedElite5, mapNamedElite6, mapNamedElite7 ]);
  let mapSafeHouses = L.layerGroup([ mapSafeHouse1, mapSafeHouse2 ]);
  let mapSettlements = L.layerGroup([ mapSettlement1 ]);

  let mapOverlays = {
    'Comms': mapComms,
    'Control Points': mapControlPoints,
    'ECHO': mapEcho,
    'Hunters': mapHunters,
    'Missions': mapMissions,
    'Named Elites': mapNamedElites,
    'Safe Houses': mapSafeHouses,
    'Settlements': mapSettlements
  };

  let layerControl = L.control.layers({}, mapOverlays, { position: 'topleft' }).addTo(map);

  // Markers: Sidebar filters

  const TOGGLE_CHK = document.querySelectorAll('.filters input[type="checkbox"]');

  // Sync layer state
  map.on('overlayadd overlayremove', (e) => {
    const CHK_EL = document.querySelector(`.filters input[data-layer="${e.name}"]`);
    if (CHK_EL) CHK_EL.checked = (e.type === 'overlayadd');
  });

  TOGGLE_CHK.forEach(chk => {
    chk.addEventListener('change', function () {
      const LAYER_ID = this.dataset.layer;
      this.checked ? mapOverlays[ LAYER_ID ].addTo(map) : mapOverlays[ LAYER_ID ].removeFrom(map);
    });
  });

  const HIDEALL_BTN = document.querySelector('.filters-toggle #hideall');
  const SHOWALL_BTN = document.querySelector('.filters-toggle #showall');

  HIDEALL_BTN.addEventListener('click', () => {
    TOGGLE_CHK.forEach(chk => {
      chk.checked = false;
      const LAYER_ID = chk.dataset.layer;
      mapOverlays[ LAYER_ID ].removeFrom(map);
    });
  });

  SHOWALL_BTN.addEventListener('click', () => {
    TOGGLE_CHK.forEach(chk => {
      chk.checked = true;
      const LAYER_ID = chk.dataset.layer;
      mapOverlays[ LAYER_ID ].addTo(map);
    });
  });

  // Initialize Controls

  centerViewButton.addTo(map);
  map.attributionControl.setPrefix(null);
  map.attributionControl.addAttribution('<a href="https://github.com/Strappazzon/td2-map-brooklyn/blob/master/.github/README.md#licensing" target="_blank">Credits</a>');

  // Initialize map

  L.control.zoom({ position: 'bottomleft' }).addTo(map);
  L.imageOverlay('assets/img/map.jpg', mapBounds).addTo(map);

  // Layers displayed by default
  mapComms.addTo(map);
  mapControlPoints.addTo(map);
  mapEcho.addTo(map);
  mapHunters.addTo(map);
  mapMissions.addTo(map);
  mapNamedElites.addTo(map);
  mapSafeHouses.addTo(map);
  mapSettlements.addTo(map);
});
