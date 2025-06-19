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

  // Neighborhoods

  let labelOptions = {
    className: 'leaflet-neighborhood',
    iconSize: [ 300, 40 ],
    iconAnchor: [ 150, 20 ]
  };

  let labelBrooklynHeights = L.divIcon({
    html: 'Brooklyn Heights',
    ...labelOptions
  });

  let labelDumbo = L.divIcon({
    html: 'DUMBO',
    ...labelOptions
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

  let controlPointIconCleaners = L.icon({
    iconUrl: 'assets/img/markers/control-point_cleaners.png',
    ...iconOptions
  });

  let controlPointIconRikers = L.icon({
    iconUrl: 'assets/img/markers/control-point_rikers.png',
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

  let nodeCompIcon = L.icon({
    iconUrl: 'assets/img/markers/node-components.svg',
    ...iconOptions
  });

  let nodeFoodIcon = L.icon({
    iconUrl: 'assets/img/markers/node-food.svg',
    ...iconOptions
  });

  let nodeWaterIcon = L.icon({
    iconUrl: 'assets/img/markers/node-water.svg',
    ...iconOptions
  });

  let safeHouseIcon = L.icon({
    iconUrl: 'assets/img/markers/safe-house.svg',
    ...iconOptions
  });

  let settlementBridgeIcon = L.icon({
    iconUrl: 'assets/img/markers/bridge.png',
    ...iconOptions
  });

  let shdCacheIcon = L.icon({
    iconUrl: 'assets/img/markers/shd-tech.png',
    ...iconOptions
  });

  // Neighborhoods: Definitions

  let mapNeighborhoodBrooklynHeights = L.marker(convertCoords(1404, 1423), { icon: labelBrooklynHeights, interactive: false, keyboard: false });
  let mapNeighborhoodDumbo = L.marker(convertCoords(3100, 871), { icon: labelDumbo, interactive: false, keyboard: false });

  // Markers: Definitions

  let mapCommsBridge1 = L.marker(convertCoords(2233, 1155), { icon: commsIcon }).bindPopup(md.render('# Resources\n\nBridge'));
  let mapCommsBridge2 = L.marker(convertCoords(2271, 1184), { icon: commsIcon }).bindPopup(md.render('# Fishy\n\nBridge'));
  let mapCommsBridge3 = L.marker(convertCoords(2240, 1217), { icon: commsIcon }).bindPopup(md.render('# Sarah\n\nBridge'));
  let mapCommsBridge4 = L.marker(convertCoords(2359, 1210), { icon: commsIcon }).bindPopup(md.render('# Reunited\n\nBridge'));
  let mapCommsBridge5 = L.marker(convertCoords(2312, 1290), { icon: commsIcon }).bindPopup(md.render('# Maral\n\nBridge'));
  let mapCommsBridge6 = L.marker(convertCoords(2229, 1338), { icon: commsIcon }).bindPopup(md.render('# Marauders\n\nBridge'));
  let mapCommsHostiles1 = L.marker(convertCoords(1630, 2257), { icon: commsIcon }).bindPopup(md.render('# Negotiations\n\nHostiles'));
  let mapCommsHostiles2 = L.marker(convertCoords(456, 1283), { icon: commsIcon }).bindPopup(md.render('# Tech\n\nHostiles'));
  let mapCommsHostiles3 = L.marker(convertCoords(2721, 1379), { icon: commsIcon }).bindPopup(md.render('# Meret\n\nHostiles'));
  let mapCommsHostiles4 = L.marker(convertCoords(2812, 1151), { icon: commsIcon }).bindPopup(md.render('# Collab\n\nHostiles'));
  let mapCommsHostiles5 = L.marker(convertCoords(3556, 1326), { icon: commsIcon }).bindPopup(md.render('# Clinic\n\nHostiles'));
  let mapCommsHostiles6 = L.marker(convertCoords(3700, 1257), { icon: commsIcon }).bindPopup(md.render('# Attack\n\nHostiles'));
  let mapCommsHostiles7 = L.marker(convertCoords(3558, 1005), { icon: commsIcon }).bindPopup(md.render('# SFX\n\nHostiles'));
  let mapCommsHostiles8 = L.marker(convertCoords(3793, 1049), { icon: commsIcon }).bindPopup(md.render('# Director\n\nHostiles'));
  let mapCommsHostiles9 = L.marker(convertCoords(3432, 708), { icon: commsIcon }).bindPopup(md.render('# Guard Rails\n\nHostiles'));
  let mapCommsHostiles10 = L.marker(convertCoords(3105, 1476), { icon: commsIcon }).bindPopup(md.render('# Grant\n\nHostiles'));
  let mapCommsFriendly1 = L.marker(convertCoords(383, 1355), { icon: commsIcon }).bindPopup(md.render('# Power Stations\n\nFriendly'));
  let mapCommsFriendly2 = L.marker(convertCoords(740, 856), { icon: commsIcon }).bindPopup(md.render('# Expectations\n\nFriendly'));
  let mapCommsFriendly3 = L.marker(convertCoords(2324, 509), { icon: commsIcon }).bindPopup(md.render('# Cleaners\n\nFriendly'));
  let mapCommsFriendly4 = L.marker(convertCoords(3520, 1548), { icon: commsIcon }).bindPopup(md.render('# Sacrifice\n\nFriendly'));
  let mapCommsHistory1 = L.marker(convertCoords(548, 1663), { icon: commsIcon }).bindPopup(md.render('# Territory\n\nHistory'));
  let mapCommsHistory2 = L.marker(convertCoords(1475, 1933), { icon: commsIcon }).bindPopup(md.render('# Hostage\n\nHistory'));
  let mapCommsHistory3 = L.marker(convertCoords(1610, 1445), { icon: commsIcon }).bindPopup(md.render('# Ready\n\nHistory'));
  let mapCommsHistory4 = L.marker(convertCoords(1172, 1293), { icon: commsIcon }).bindPopup(md.render('# Building Bridges\n\nHistory'));
  let mapCommsHistory5 = L.marker(convertCoords(1248, 969), { icon: commsIcon }).bindPopup(md.render('# Weapons\n\nHistory'));
  let mapCommsHistory6 = L.marker(convertCoords(3257, 1247), { icon: commsIcon }).bindPopup(md.render('# Police\n\nHistory'));
  let mapCommsHistory7 = L.marker(convertCoords(2765, 692), { icon: commsIcon }).bindPopup(md.render('# Free\n\nHistory'));
  let mapCommsHistory8 = L.marker(convertCoords(3165, 550), { icon: commsIcon }).bindPopup(md.render('# Baby\n\nHistory'));

  let mapControlPoint1 = L.marker(convertCoords(1676, 1887), { icon: controlPointIconRikers }).bindPopup(md.render('# Cadman Plaza\n\nRikers'));
  let mapControlPoint2 = L.marker(convertCoords(1519, 697), { icon: controlPointIconRikers }).bindPopup(md.render('# Fulton Ferry Market\n\nRikers'));
  let mapControlPoint3 = L.marker(convertCoords(2692, 541), { icon: controlPointIconCleaners }).bindPopup(md.render('# The Warehouse\n\nCleaners'));
  let mapControlPoint4 = L.marker(convertCoords(3241, 1101), { icon: controlPointIconCleaners }).bindPopup(md.render('# The Farm\n\nCleaners'));

  let mapEcho1 = L.marker(convertCoords(3740, 2120), { icon: echoIcon })
    .bindPopup(md.render('# Born\n\n**Location:** Inside The Art Museum main mission.'));
  let mapEcho2 = L.marker(convertCoords(3550, 1590), { icon: echoIcon })
    .bindPopup(md.render('# Fire Doors\n\n**Location:** Inside CERA Clinic world mission.'));
  let mapEcho3 = L.marker(convertCoords(1710, 277), { icon: echoIcon })
    .bindPopup(
      md.render(
        '<div class="marker-image"><div class="image-wrapper"><img src="assets/img/screenshots/echo-faye.jpg" alt="ECHO: Faye"></div></div>\n\n' +
        '# Faye\n\n**Requirements:** Collect all 16 Danver\'s Network cards.\n\n[Full guide.](https://redd.it/1kz9y7r)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });

  let mapHunterCipher = L.marker(convertCoords(2017, 636), { icon: hunterIcon })
    .bindPopup(
      md.render(
        '<div class="marker-images"><div class="image-wrapper"><img src="assets/img/screenshots/hunter-cipher_1.jpg" alt="Location"></div><div class="image-wrapper"><img src="assets/img/screenshots/hunter-cipher_2.jpg" alt="Sequence"></div></div>\n\n' +
        '# Hunter Spawn\n\n**Mask:** Cipher\n\n**Steps:** Shoot the word "ROBOTO" on the AC units and the Hunter will spawn.\n\n[Full guide.](https://redd.it/1kx76zh)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapHunterConqueror = L.marker(convertCoords(842, 1311), { icon: hunterIcon })
    .bindPopup(
      md.render(
        '# Hunter Spawn\n\n**Mask:** Conqueror\n\n**Steps:** Interact with the stuffed animals after detonating all 7 of them and the Hunter will spawn.\n\n[Full guide.](https://youtu.be/KhMcKx75kdc?t=53)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapHunterCraver = L.marker(convertCoords(937, 609), { icon: hunterIcon })
    .bindPopup(
      md.render(
        '# Hunter Spawn\n\n**Mask:** Craver\n\n**Steps:** Interact with the 4 tanks after collecting them and the Hunter will spawn.\n\n[Full guide.](https://youtu.be/R6A8DEWbboI?t=41)'
      )
    );
  let mapHunterLumen = L.marker(convertCoords(1792, 745), { icon: hunterIcon })
    .bindPopup(
      md.render(
        '<div class="marker-image"><div class="image-wrapper"><img src="assets/img/screenshots/hunter-lumen_1.jpg" alt="Garage Location"></div></div>\n\n' +
        '# Hunter Spawn\n\n**Mask:** Lumen\n\n**Requirements:** Go there after 9 PM.\n\n' +
        '\n\n**Steps:** Trip the switch inside the garage and follow the UV lights. The Hunter will spawn at the final location.\n\n[Full guide.](https://redd.it/1kwzqez)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapHunterMerry = L.marker(convertCoords(1917, 323), { icon: hunterIcon })
    .bindPopup(md.render('# Hunter Spawn\n\n**Mask:** Merry\n\n**Steps:** Pick up the Legs, Torso, Tail and Head of a Merry-Go-Round horse and assemble them at the Merry-Go-Round where then the Hunter will spawn.\n\n[Full guide.](https://redd.it/1kx6yjh)'));
  let mapHunterNecronos = L.marker(convertCoords(2886, 588), { icon: hunterIcon })
    .bindPopup(
      md.render(
        '# Hunter Spawn\n\n**Mask:** Necronos\n\n**Requirements:** Complete all prior 7 Hunter encounters.\n\n' +
        '**Steps:** Go to the Division 1 starting safe house. Interact with the whiteboard and follow the UV lights to the rooftop where the Hunter will engage.' +
        '\n\n[Full guide.](https://redd.it/1kyek7o)'
      )
    );
  let mapHunterRedtail = L.marker(convertCoords(2898, 823), { icon: hunterIcon })
    .bindPopup(
      md.render(
        '<div class="marker-images"><div class="image-wrapper"><img src="assets/img/screenshots/hunter-redtail_1.jpg" alt="Switches"></div><div class="image-wrapper"><img src="assets/img/screenshots/hunter-redtail_2.jpg" alt="Outpost Entrance"></div><div class="image-wrapper"><img src="assets/img/screenshots/hunter-redtail_3.jpg" alt="Outpost"></div></div>\n\n' +
        '# Hunter Spawn\n\n**Mask:** Redtail\n\n' +
        '**Steps:** Hit all nine switches then go back to the listening outpost and interact with the PC. Go back up and the Hunter will spawn ahead of you.' +
        '\n\n[Full guide.](https://redd.it/1kx49yp)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapHunterTracker = L.marker(convertCoords(3507, 1145), { icon: hunterIcon })
    .bindPopup(
      md.render(
        '<div class="marker-image"><div class="image-wrapper"><img src="assets/img/screenshots/hunter-tracker_1.jpg" alt="Entrance"></div></div>\n\n' +
        '# Hunter Spawn\n\n**Mask:** Tracker\n\n' +
        '**Steps:** Enter the 192 Building from the southern entrance. Move towards the corresponding locations (like a Konami code): W, A, W, D, S, D, W, A, W, D, W, A, S, D, W. Interact with the "RISE" switch.' +
        '\n\n[Full guide.](https://redd.it/1kye8fv)'
      )
    );

  let mapMainMission1 = L.marker(convertCoords(4061, 1374), { icon: missionIcon }).bindPopup(md.render('# H5 Refinery\n\n**Type:** Main Mission\n\n**Bosses:** Violet, Jasinski'));
  let mapMainMission2 = L.marker(convertCoords(3761, 2100), { icon: missionIcon }).bindPopup(md.render('# The Art Museum\n\n**Type:** Main Mission\n\n**Bosses:** Vinnie-Gogh, "Rat Queen", Donnie, Monet'));
  let mapMainMission3 = L.marker(convertCoords(2941, 2150), { icon: missionIcon }).bindPopup(md.render('# Army Terminal\n\n**Type:** Main Mission\n\n**Bosses:** Johnny "Grey" Linder, LM-21 "Marauder"'));
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
    .bindPopup(md.render('# Named Elite\n\n**Location:** Underground\n\nDanver\'s Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver\'s Network cards.'));
  let mapNamedElite7 = L.marker(convertCoords(3241, 1489), { icon: namedEliteIcon })
    .bindPopup(md.render('# Named Elite\n\nDanver\'s Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver\'s Network cards.'));

  let mapResCompNode1 = L.marker(convertCoords(857, 1188), { icon: nodeCompIcon }).bindPopup(md.render('# Components\n\nResource Node'));
  let mapResCompNode2 = L.marker(convertCoords(839, 767), { icon: nodeCompIcon }).bindPopup(md.render('# Components\n\nResource Node'));
  let mapResCompNode3 = L.marker(convertCoords(3402, 585), { icon: nodeCompIcon }).bindPopup(md.render('# Components\n\nResource Node'));
  let mapResCompNode4 = L.marker(convertCoords(2849, 1150), { icon: nodeCompIcon }).bindPopup(md.render('# Components\n\nResource Node'));

  let mapResFoodNode1 = L.marker(convertCoords(1458, 953), { icon: nodeFoodIcon }).bindPopup(md.render('# Food\n\nResource Node'));
  let mapResFoodNode2 = L.marker(convertCoords(2931, 904), { icon: nodeFoodIcon }).bindPopup(md.render('# Food\n\nResource Node'));
  let mapResFoodNode3 = L.marker(convertCoords(3519, 1337), { icon: nodeFoodIcon }).bindPopup(md.render('# Food\n\nResource Node'));

  let mapResWaterNode1 = L.marker(convertCoords(1186, 1667), { icon: nodeWaterIcon }).bindPopup(md.render('# Water\n\nResource Node'));
  let mapResWaterNode2 = L.marker(convertCoords(1434, 1299), { icon: nodeWaterIcon }).bindPopup(md.render('# Water\n\nResource Node'));
  let mapResWaterNode3 = L.marker(convertCoords(1896, 473), { icon: nodeWaterIcon }).bindPopup(md.render('# Water\n\nResource Node'));
  let mapResWaterNode4 = L.marker(convertCoords(2249, 733), { icon: nodeWaterIcon }).bindPopup(md.render('# Water\n\nResource Node'));

  let mapSafeHouse1 = L.marker(convertCoords(1162, 1291), { icon: safeHouseIcon }).bindPopup(md.render('# The Lookout\n\nSafe House'));
  let mapSafeHouse2 = L.marker(convertCoords(3178, 517), { icon: safeHouseIcon }).bindPopup(md.render('# The Retreat\n\nSafe House'));

  let mapSettlement1 = L.marker(convertCoords(2305, 1244), { icon: settlementBridgeIcon }).bindPopup(md.render('# The Bridge\n\nSettlement'));

  let mapShdCache1 = L.marker(convertCoords(1201, 1183), { icon: shdCacheIcon })
    .bindPopup(
      md.render(
        '<div class="marker-image"><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-1.jpg" alt="SHD Tech Cache"></div></div>\n\n' +
        '# SHD Tech Cache\n\n**Location:** Underground\n\n' +
        '**Steps:** Follow the tunnel. The first gate is opened by shooting the yellow box in front of it. The second gate is opened by shooting the yellow box hidden behind a piece of white cloth on the left behind the gate.' +
        '\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=733)'
      )
    )
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache2 = L.marker(convertCoords(1557, 1180), { icon: shdCacheIcon })
    .bindPopup(
      md.render(
        '<div class="marker-images"><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-2_1.jpg" alt="Generator"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-2_2.jpg" alt="SHD Tech Cache"></div></div>\n\n' +
        '# SHD Tech Cache\n\n' +
        '**Steps:** Turn on the generator to open the gate and shoot down the rope to reach the cache.' +
        '\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=665)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache3 = L.marker(convertCoords(1995, 1381), { icon: shdCacheIcon })
    .bindPopup(
      md.render(
        '<div class="marker-images"><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-3_1.jpg" alt="Truck"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-3_2.jpg" alt="Generator"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-3_3.jpg" alt="SHD Tech Cache"></div></div>\n\n' +
        '# SHD Tech Cache\n\n' +
        '**Steps:** Climb up the truck, open the first gate by shooting the lock then follow the path and turn on the generator on the left. Go back the way you came, turn right at the gate and interact with the computer. The second gate is now open and will allow you to shoot the lock on the blue door.' +
        '\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=568)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache4 = L.marker(convertCoords(1365, 1775), { icon: shdCacheIcon })
    .bindPopup(
      md.render(
        '<div class="marker-images"><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-4_1.jpg" alt="Door"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-4_2.jpg" alt="Valves"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-4_3.jpg" alt="SHD Tech Cache"></div></div>\n\n' +
        '# SHD Tech Cache\n\n**Location:** Underground\n\n' +
        '**Steps:** Take the first tunnel on the left and shoot the lock on the door behind the bars on the left. Go inside that door and turn the valves: Green, Grey, Red. The water will recede allowing you to reach the cache.' +
        '\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=816)'
      )
    )
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache5 = L.marker(convertCoords(934, 1758), { icon: shdCacheIcon })
    .bindPopup(
      md.render(
        '<div class="marker-images"><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-5_1.jpg" alt="Fuse 1"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-5_2.jpg" alt="Fuse 2"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-5_3.jpg" alt="SHD Tech Cache"></div></div>\n\n' +
        '# SHD Tech Cache\n\n' +
        '**Steps:** Enter the alley and climb the wall on the left and take out the fuse. Climb the wall where the fuse box is and go up the scaffolding towards the cache. Put the fuse in to open the gate and access the cache.' +
        '\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=928)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache6 = L.marker(convertCoords(1842, 698), { icon: shdCacheIcon })
    .bindPopup(
      md.render(
        '<div class="marker-images"><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-6_1.jpg" alt="Scaffolding"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-6_2.jpg" alt="Yellow Box"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-6_3.jpg" alt="Generator"></div></div>\n\n' +
        '# SHD Tech Cache\n\n**Location:** On the roof\n\n' +
        '**Steps:** Go up the scaffolding and shoot the yellow box behind the ventilation duct, then climb up the ladder. Turn on the generator in front of the graffiti to open the gate and access the cache.' +
        '\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=477)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache7 = L.marker(convertCoords(2140, 867), { icon: shdCacheIcon })
    .bindPopup(md.render('# SHD Tech Cache\n\n**Location:** Undergroundn\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=359)'));
  let mapShdCache8 = L.marker(convertCoords(3513, 763), { icon: shdCacheIcon })
    .bindPopup(
      md.render(
        '<div class="marker-images"><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-8_1.jpg" alt="Entrance"></div><div class="image-wrapper"><img src="assets/img/screenshots/shd-cache-8_2.jpg" alt="SHD Tech Cache"></div></div>\n\n' +
        '# SHD Tech Cache\n\n**Location:** On the roof\n\n' +
        '\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=106)'
      )
    ).on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache9 = L.marker(convertCoords(3120, 846), { icon: shdCacheIcon })
    .bindPopup(md.render('# SHD Tech Cache\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=156)'));
  let mapShdCache10 = L.marker(convertCoords(2986, 1285), { icon: shdCacheIcon })
    .bindPopup(md.render('# SHD Tech Cache\n\n**Location:** Underground\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=213)'));

  // Markers: Overlays

  let mapNeighborhoods = L.layerGroup([ mapNeighborhoodBrooklynHeights, mapNeighborhoodDumbo ]);

  let mapComms = L.layerGroup([
    mapCommsBridge1, mapCommsBridge2, mapCommsBridge3, mapCommsBridge4, mapCommsBridge5, mapCommsBridge6,
    mapCommsHostiles1, mapCommsHostiles2, mapCommsHostiles3, mapCommsHostiles4, mapCommsHostiles5, mapCommsHostiles6, mapCommsHostiles7, mapCommsHostiles8, mapCommsHostiles9, mapCommsHostiles10,
    mapCommsFriendly1, mapCommsFriendly2, mapCommsFriendly3, mapCommsFriendly4,
    mapCommsHistory1, mapCommsHistory2, mapCommsHistory3, mapCommsHistory4, mapCommsHistory5, mapCommsHistory6, mapCommsHistory7, mapCommsHistory8
  ]);
  let mapControlPoints = L.layerGroup([ mapControlPoint1, mapControlPoint2, mapControlPoint3, mapControlPoint4 ]);
  let mapEcho = L.layerGroup([ mapEcho1, mapEcho2, mapEcho3 ]);
  let mapHunters = L.layerGroup([ mapHunterCipher, mapHunterConqueror, mapHunterCraver, mapHunterLumen, mapHunterMerry, mapHunterNecronos, mapHunterRedtail, mapHunterTracker ]);
  let mapMissions = L.layerGroup([
    mapMainMission1, mapMainMission2, mapMainMission3,
    mapMission1, mapMission2, mapMission3, mapMission4
  ]);
  let mapNamedElites = L.layerGroup([ mapNamedElite1, mapNamedElite2, mapNamedElite3, mapNamedElite4, mapNamedElite5, mapNamedElite6, mapNamedElite7 ]);
  let mapResources = L.layerGroup([
    mapResCompNode1, mapResCompNode2, mapResCompNode3, mapResCompNode4,
    mapResFoodNode1, mapResFoodNode2, mapResFoodNode3,
    mapResWaterNode1, mapResWaterNode2, mapResWaterNode3, mapResWaterNode4
  ]);
  let mapSafeHouses = L.layerGroup([ mapSafeHouse1, mapSafeHouse2 ]);
  let mapSettlements = L.layerGroup([ mapSettlement1 ]);
  let mapShdCaches = L.layerGroup([ mapShdCache1, mapShdCache2, mapShdCache3, mapShdCache4, mapShdCache5, mapShdCache6, mapShdCache7, mapShdCache8, mapShdCache9, mapShdCache10 ]);

  let mapOverlays = {
    'Comms': mapComms,
    'Control Points': mapControlPoints,
    'ECHO': mapEcho,
    'Hunters': mapHunters,
    'Missions': mapMissions,
    'Named Elites': mapNamedElites,
    'Resource Node': mapResources,
    'Safe Houses': mapSafeHouses,
    'Settlements': mapSettlements,
    'SHD Tech Caches': mapShdCaches
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
  const ZONESTG_BTN = document.querySelector('.filters-toggle #zonestg');

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

  let neighborhoodsVisible = true;

  ZONESTG_BTN.addEventListener('click', () => {
    if (neighborhoodsVisible === true) {
      map.removeLayer(mapNeighborhoods);
      ZONESTG_BTN.classList.add('disabled');
      neighborhoodsVisible = false;
    } else {
      map.addLayer(mapNeighborhoods);
      ZONESTG_BTN.classList.remove('disabled');
      neighborhoodsVisible = true;
    }
  });

  // Initialize Controls

  centerViewButton.addTo(map);
  map.attributionControl.setPrefix(null);
  map.attributionControl.addAttribution('<a href="https://github.com/Strappazzon/td2-map-brooklyn/blob/master/.github/README.md#licensing" target="_blank">Credits</a>');

  // Initialize map

  L.control.zoom({ position: 'bottomleft' }).addTo(map);
  L.imageOverlay('assets/img/map.jpg', mapBounds).addTo(map);

  // Default Layers

  if (neighborhoodsVisible) { mapNeighborhoods.addTo(map); };

  mapComms.addTo(map);
  mapControlPoints.addTo(map);
  mapEcho.addTo(map);
  mapHunters.addTo(map);
  mapMissions.addTo(map);
  mapNamedElites.addTo(map);
  mapResources.addTo(map);
  mapSafeHouses.addTo(map);
  mapSettlements.addTo(map);
  mapShdCaches.addTo(map);
});
