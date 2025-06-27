const MARKERS = {
  mapCommsBridge1: {
    coords: [ 2233, 1155 ],
    title: "# Resources",
    description: "Bridge"
  },
  mapCommsBridge2: {
    coords: [ 2271, 1184 ],
    title: "# Fishy",
    description: "Bridge"
  },
  mapCommsBridge3: {
    coords: [ 2240, 1217 ],
    title: "# Sarah",
    description: "Bridge"
  },
  mapCommsBridge4: {
    coords: [ 2359, 1210 ],
    title: "# Reunited",
    description: "Bridge"
  },
  mapCommsBridge5: {
    coords: [ 2312, 1290 ],
    title: "# Maral",
    description: "Bridge"
  },
  mapCommsBridge6: {
    coords: [ 2229, 1338 ],
    title: "# Marauders",
    description: "Bridge"
  },
  mapCommsHostiles1: {
    coords: [ 1630, 2257 ],
    title: "# Negotiations",
    description: "Hostiles"
  },
  mapCommsHostiles2: {
    coords: [ 456, 1283 ],
    title: "# Tech",
    description: "Hostiles"
  },
  mapCommsHostiles3: {
    coords: [ 2721, 1379 ],
    title: "# Meret",
    description: "Hostiles"
  },
  mapCommsHostiles4: {
    coords: [ 2812, 1151 ],
    title: "# Collab",
    description: "Hostiles"
  },
  mapCommsHostiles5: {
    coords: [ 3556, 1326 ],
    title: "# Clinic",
    description: "Hostiles"
  },
  mapCommsHostiles6: {
    coords: [ 3700, 1257 ],
    title: "# Attack",
    description: "Hostiles"
  },
  mapCommsHostiles7: {
    coords: [ 3558, 1005 ],
    title: "# SFX",
    description: "Hostiles"
  },
  mapCommsHostiles8: {
    coords: [ 3793, 1049 ],
    title: "# Director",
    description: "Hostiles"
  },
  mapCommsHostiles9: {
    coords: [ 3432, 708 ],
    title: "# Guard Rails",
    description: "Hostiles"
  },
  mapCommsHostiles10: {
    coords: [ 3105, 1476 ],
    title: "# Grant",
    description: "Hostiles"
  },
  mapCommsFriendly1: {
    coords: [ 383, 1355 ],
    title: "# Power Stations",
    description: "Friendly"
  },
  mapCommsFriendly2: {
    coords: [ 740, 856 ],
    title: "# Expectations",
    description: "Friendly"
  },
  mapCommsFriendly3: {
    coords: [ 2324, 509 ],
    title: "# Cleaners",
    description: "Friendly"
  },
  mapCommsFriendly4: {
    coords: [ 3520, 1548 ],
    title: "# Sacrifice",
    description: "Friendly"
  },
  mapCommsHistory1: {
    coords: [ 548, 1663 ],
    title: "# Territory",
    description: "History"
  },
  mapCommsHistory2: {
    coords: [ 1475, 1933 ],
    title: "# Hostage",
    description: "History"
  },
  mapCommsHistory3: {
    coords: [ 1610, 1445 ],
    title: "# Ready",
    description: "History"
  },
  mapCommsHistory4: {
    coords: [ 1172, 1293 ],
    title: "# Building Bridges",
    description: "History"
  },
  mapCommsHistory5: {
    coords: [ 1248, 969 ],
    title: "# Weapons",
    description: "History"
  },
  mapCommsHistory6: {
    coords: [ 3257, 1247 ],
    title: "# Police",
    description: "History"
  },
  mapCommsHistory7: {
    coords: [ 2765, 692 ],
    title: "# Free",
    description: "History"
  },
  mapCommsHistory8: {
    coords: [ 3165, 550 ],
    title: "# Baby",
    description: "History"
  },
  mapControlPoint1: {
    coords: [ 1676, 1887 ],
    title: "# Cadman Plaza",
    description: "Rikers"
  },
  mapControlPoint2: {
    coords: [ 1519, 697 ],
    title: "# Fulton Ferry Market",
    description: "Rikers"
  },
  mapControlPoint3: {
    coords: [ 2692, 541 ],
    title: "# The Warehouse",
    description: "Cleaners"
  },
  mapControlPoint4: {
    coords: [ 3241, 1101 ],
    title: "# The Farm",
    description: "Cleaners"
  },
  mapEcho1: {
    coords: [ 3740, 2120 ],
    title: "# Born",
    description: "**Location:** Inside The Art Museum main mission."
  },
  mapEcho2: {
    coords: [ 3550, 1590 ],
    title: "# Fire Doors",
    description: "**Location:** Inside CERA Clinic world mission."
  },
  mapEcho3: {
    coords: [ 1710, 277 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/echo-faye.jpg\" alt=\"ECHO: Faye\"></div></div>",
    title: "# Faye",
    description: "**Requirements:** Collect all 16 Danver\'s Network cards.\n\n[Full guide.](https://redd.it/1kz9y7r)"
  },
  mapHunterCipher: {
    coords: [ 2017, 636 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-cipher_1.jpg\" alt=\"Location\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-cipher_2.jpg\" alt=\"Sequence\"></div></div>",
    title: "# Hunter Spawn",
    description: "**Mask:** Cipher\n\n**Steps:** Shoot the word \"ROBOTO\" on the AC units and the Hunter will spawn.\n\n[Full guide.](https://redd.it/1kx76zh)"
  },
  mapHunterConqueror: {
    coords: [ 842, 1311 ],
    title: "# Hunter Spawn",
    description: "**Mask:** Conqueror\n\n**Steps:** Interact with the stuffed animals after detonating all 7 of them and the Hunter will spawn.\n\n[Full guide.](https://youtu.be/KhMcKx75kdc?t=53)"
  },
  mapHunterCraver: {
    coords: [ 937, 609 ],
    title: "# Hunter Spawn",
    description: "**Mask:** Craver\n\n**Steps:** Interact with the 4 tanks after collecting them and the Hunter will spawn.\n\n[Full guide.](https://youtu.be/R6A8DEWbboI?t=41)"
  },
  mapHunterLumen: {
    coords: [ 1792, 745 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-lumen_1.jpg\" alt=\"Garage Location\"></div></div>",
    title: "# Hunter Spawn",
    description: "**Mask:** Lumen\n\n**Requirements:** Go there after 9 PM.\n\n**Steps:** Trip the switch inside the garage and follow the UV lights. The Hunter will spawn at the final location.\n\n[Full guide.](https://redd.it/1kwzqez)"
  },
  mapHunterMerry: {
    coords: [ 1917, 323 ],
    title: "# Hunter Spawn",
    description: "**Mask:** Merry\n\n**Steps:** Pick up the Legs, Torso, Tail and Head of a Merry-Go-Round horse and assemble them at the Merry-Go-Round where then the Hunter will spawn.\n\n[Full guide.](https://redd.it/1kx6yjh)"
  },
  mapHunterNecronos: {
    coords: [ 2886, 588 ],
    title: "# Hunter Spawn",
    description: "**Mask:** Necronos\n\n**Requirements:** Complete all prior 7 Hunter encounters.\n\n**Steps:** Go to the Division 1 starting safe house. Interact with the whiteboard and follow the UV lights to the rooftop where the Hunter will engage.\n\n[Full guide.](https://redd.it/1kyek7o)"
  },
  mapHunterRedtail: {
    coords: [ 2898, 823 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_1.jpg\" alt=\"Switches\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_2.jpg\" alt=\"Outpost Entrance\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_3.jpg\" alt=\"Outpost\"></div></div>",
    title: "# Hunter Spawn",
    description: "**Mask:** Redtail\n\n**Steps:** Hit all nine switches then go back to the listening outpost and interact with the PC. Go back up and the Hunter will spawn ahead of you.\n\n[Full guide.](https://redd.it/1kx49yp)"
  },
  mapHunterTracker: {
    coords: [ 3507, 1145 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-tracker_1.jpg\" alt=\"Entrance\"></div></div>",
    title: "# Hunter Spawn",
    description: "**Mask:** Tracker\n\n**Steps:** Enter the 192 Building from the southern entrance. Move towards the corresponding locations (like a Konami code): W, A, W, D, S, D, W, A, W, D, W, A, S, D, W. Interact with the \"RISE\" switch.\n\n[Full guide.](https://redd.it/1kye8fv)"
  },
  mapMainMission1: {
    coords: [ 4061, 1374 ],
    title: "# H5 Refinery",
    description: "**Type:** Main Mission\n\n**Bosses:** Violet, Jasinski"
  },
  mapMainMission2: {
    coords: [ 3761, 2100 ],
    title: "# The Art Museum",
    description: "**Type:** Main Mission\n\n**Bosses:** Vinnie-Gogh, \"Rat Queen\", Donnie, Monet"
  },
  mapMainMission3: {
    coords: [ 2941, 2150 ],
    title: "# Army Terminal",
    description: "**Type:** Main Mission\n\n**Bosses:** Johnny \"Grey\" Linder, LM-21 \"Marauder\""
  },
  mapMission1: {
    coords: [ 656, 1364 ],
    title: "# Bridge Park Pier",
    description: "**Type:** World Mission\n\n**Boss:** Bombshell"
  },
  mapMission2: {
    coords: [ 1044, 2025 ],
    title: "# Clark Street",
    description: "**Type:** World Mission\n\n**Boss:** Auto"
  },
  mapMission3: {
    coords: [ 3715, 902 ],
    title: "# DUMBO Skate Park",
    description: "**Type:** World Mission\n\n**Boss:** Hollings"
  },
  mapMission4: {
    coords: [ 3581, 1535 ],
    title: "# CERA Clinic",
    description: "**Type:** World Mission\n\n**Boss:** Stewart"
  },
  mapNamedElite1: {
    coords: [ 771, 1259 ],
    title: "# Named Elite",
    description: "Danver's Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver's Network cards."
  },
  mapNamedElite2: {
    coords: [ 1086, 548 ],
    title: "# Named Elite",
    description: "Danver's Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver's Network cards."
  },
  mapNamedElite3: {
    coords: [ 1145, 1071 ],
    title: "# Named Elite",
    description: "Danver's Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver's Network cards."
  },
  mapNamedElite4: {
    coords: [ 2013, 310 ],
    title: "# Named Elite",
    description: "Danver's Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver's Network cards."
  },
  mapNamedElite5: {
    coords: [ 3403, 590 ],
    title: "# Named Elite",
    description: "Danver's Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver's Network cards."
  },
  mapNamedElite6: {
    coords: [ 2710, 1417 ],
    title: "# Named Elite",
    description: "**Location:** Underground\n\nDanver's Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver's Network cards."
  },
  mapNamedElite7: {
    coords: [ 3241, 1489 ],
    title: "# Named Elite",
    description: "Danver's Network card farming spot. Every 30 minutes a random boss will spawn here and drop one of the 16 Danver's Network cards."
  },
  mapResCompNode1: {
    coords: [ 857, 1188 ],
    title: "# Components",
    description: "Resource Node"
  },
  mapResCompNode2: {
    coords: [ 839, 767 ],
    title: "# Components",
    description: "Resource Node"
  },
  mapResCompNode3: {
    coords: [ 3402, 585 ],
    title: "# Components",
    description: "Resource Node"
  },
  mapResCompNode4: {
    coords: [ 2849, 1150 ],
    title: "# Components",
    description: "Resource Node"
  },
  mapResFoodNode1: {
    coords: [ 1458, 953 ],
    title: "# Food",
    description: "Resource Node"
  },
  mapResFoodNode2: {
    coords: [ 2931, 904 ],
    title: "# Food",
    description: "Resource Node"
  },
  mapResFoodNode3: {
    coords: [ 3519, 1337 ],
    title: "# Food",
    description: "Resource Node"
  },
  mapResWaterNode1: {
    coords: [ 1186, 1667 ],
    title: "# Water",
    description: "Resource Node"
  },
  mapResWaterNode2: {
    coords: [ 1434, 1299 ],
    title: "# Water",
    description: "Resource Node"
  },
  mapResWaterNode3: {
    coords: [ 1896, 473 ],
    title: "# Water",
    description: "Resource Node"
  },
  mapResWaterNode4: {
    coords: [ 2249, 733 ],
    title: "# Water",
    description: "Resource Node"
  },
  mapSafeHouse1: {
    coords: [ 1162, 1291 ],
    title: "# The Lookout",
    description: "Safe House"
  },
  mapSafeHouse2: {
    coords: [ 3178, 517 ],
    title: "# The Retreat",
    description: "Safe House"
  },
  mapSettlement1: {
    coords: [ 2305, 1244 ],
    title: "# The Bridge",
    description: "Settlement"
  },
  mapShdCache1: {
    coords: [ 1201, 1183 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-1.jpg\" alt=\"SHD Tech Cache\"></div></div>",
    title: "# SHD Tech Cache",
    description: "**Location:** Underground\n\n**Steps:** Follow the tunnel. The first gate is opened by shooting the yellow box in front of it. The second gate is opened by shooting the yellow box hidden behind a piece of white cloth on the left behind the gate.\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=733)"
  },
  mapShdCache2: {
    coords: [ 1557, 1180 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-2_1.jpg\" alt=\"Generator\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-2_2.jpg\" alt=\"SHD Tech Cache\"></div></div>",
    title: "# SHD Tech Cache",
    description: "**Steps:** Turn on the generator to open the gate and shoot down the rope to reach the cache.\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=665)"
  },
  mapShdCache3: {
    coords: [ 1995, 1381 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-3_1.jpg\" alt=\"Truck\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-3_2.jpg\" alt=\"Generator\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-3_3.jpg\" alt=\"SHD Tech Cache\"></div></div>",
    title: "# SHD Tech Cache",
    description: "**Steps:** Climb up the truck, open the first gate by shooting the lock then follow the path and turn on the generator on the left. Go back the way you came, turn right at the gate and interact with the computer. The second gate is now open and will allow you to shoot the lock on the blue door.\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=568)"
  },
  mapShdCache4: {
    coords: [ 1365, 1775 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-4_1.jpg\" alt=\"Door\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-4_2.jpg\" alt=\"Valves\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-4_3.jpg\" alt=\"SHD Tech Cache\"></div></div>",
    title: "# SHD Tech Cache",
    description: "**Location:** Underground\n\n**Steps:** Take the first tunnel on the left and shoot the lock on the door behind the bars on the left. Go inside that door and turn the valves: Green, Grey, Red. The water will recede allowing you to reach the cache.\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=816)"
  },
  mapShdCache5: {
    coords: [ 934, 1758 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-5_1.jpg\" alt=\"Fuse 1\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-5_2.jpg\" alt=\"Fuse 2\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-5_3.jpg\" alt=\"SHD Tech Cache\"></div></div>",
    title: "# SHD Tech Cache",
    description: "**Steps:** Enter the alley and climb the wall on the left and take out the fuse. Climb the wall where the fuse box is and go up the scaffolding towards the cache. Put the fuse in to open the gate and access the cache.\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=928)"
  },
  mapShdCache6: {
    coords: [ 1842, 698 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-6_1.jpg\" alt=\"Scaffolding\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-6_2.jpg\" alt=\"Yellow Box\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-6_3.jpg\" alt=\"Generator\"></div></div>",
    title: "# SHD Tech Cache",
    description: "**Location:** On the roof\n\n**Steps:** Go up the scaffolding and shoot the yellow box behind the ventilation duct, then climb up the ladder. Turn on the generator in front of the graffiti to open the gate and access the cache.\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=477)"
  },
  mapShdCache7: {
    coords: [ 2140, 867 ],
    title: "# SHD Tech Cache",
    description: "**Location:** Undergroundn\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=359)"
  },
  mapShdCache8: {
    coords: [ 3513, 763 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-8_1.jpg\" alt=\"Entrance\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/shd-cache-8_2.jpg\" alt=\"SHD Tech Cache\"></div></div>",
    title: "# SHD Tech Cache",
    description: "**Location:** On the roof\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=106)"
  },
  mapShdCache9: {
    coords: [ 3120, 846 ],
    title: "# SHD Tech Cache",
    description: "[Full guide.](https://youtu.be/LxnpGCox7_c?t=156)"
  },
  mapShdCache10: {
    coords: [ 2986, 1285 ],
    title: "# SHD Tech Cache",
    description: "**Location:** Underground\n\n[Full guide.](https://youtu.be/LxnpGCox7_c?t=213)"
  }
};

window.MARKERS = MARKERS;

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

  window.mapBounds = mapBounds;

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

  window.leafletMap = map;

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

  let mapCommsBridge1 = L.marker(convertCoords(...MARKERS.mapCommsBridge1.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsBridge1.title + '\n\n' + MARKERS.mapCommsBridge1.description));
  let mapCommsBridge2 = L.marker(convertCoords(...MARKERS.mapCommsBridge2.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsBridge2.title + '\n\n' + MARKERS.mapCommsBridge2.description));
  let mapCommsBridge3 = L.marker(convertCoords(...MARKERS.mapCommsBridge3.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsBridge3.title + '\n\n' + MARKERS.mapCommsBridge3.description));
  let mapCommsBridge4 = L.marker(convertCoords(...MARKERS.mapCommsBridge4.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsBridge4.title + '\n\n' + MARKERS.mapCommsBridge4.description));
  let mapCommsBridge5 = L.marker(convertCoords(...MARKERS.mapCommsBridge5.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsBridge5.title + '\n\n' + MARKERS.mapCommsBridge5.description));
  let mapCommsBridge6 = L.marker(convertCoords(...MARKERS.mapCommsBridge6.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsBridge6.title + '\n\n' + MARKERS.mapCommsBridge6.description));
  let mapCommsHostiles1 = L.marker(convertCoords(...MARKERS.mapCommsHostiles1.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles1.title + '\n\n' + MARKERS.mapCommsHostiles1.description));
  let mapCommsHostiles2 = L.marker(convertCoords(...MARKERS.mapCommsHostiles2.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles2.title + '\n\n' + MARKERS.mapCommsHostiles2.description));
  let mapCommsHostiles3 = L.marker(convertCoords(...MARKERS.mapCommsHostiles3.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles3.title + '\n\n' + MARKERS.mapCommsHostiles3.description));
  let mapCommsHostiles4 = L.marker(convertCoords(...MARKERS.mapCommsHostiles4.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles4.title + '\n\n' + MARKERS.mapCommsHostiles4.description));
  let mapCommsHostiles5 = L.marker(convertCoords(...MARKERS.mapCommsHostiles5.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles5.title + '\n\n' + MARKERS.mapCommsHostiles5.description));
  let mapCommsHostiles6 = L.marker(convertCoords(...MARKERS.mapCommsHostiles6.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles6.title + '\n\n' + MARKERS.mapCommsHostiles6.description));
  let mapCommsHostiles7 = L.marker(convertCoords(...MARKERS.mapCommsHostiles7.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles7.title + '\n\n' + MARKERS.mapCommsHostiles7.description));
  let mapCommsHostiles8 = L.marker(convertCoords(...MARKERS.mapCommsHostiles8.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles8.title + '\n\n' + MARKERS.mapCommsHostiles8.description));
  let mapCommsHostiles9 = L.marker(convertCoords(...MARKERS.mapCommsHostiles9.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles9.title + '\n\n' + MARKERS.mapCommsHostiles9.description));
  let mapCommsHostiles10 = L.marker(convertCoords(...MARKERS.mapCommsHostiles10.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHostiles10.title + '\n\n' + MARKERS.mapCommsHostiles10.description));
  let mapCommsFriendly1 = L.marker(convertCoords(...MARKERS.mapCommsFriendly1.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsFriendly1.title + '\n\n' + MARKERS.mapCommsFriendly1.description));
  let mapCommsFriendly2 = L.marker(convertCoords(...MARKERS.mapCommsFriendly2.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsFriendly2.title + '\n\n' + MARKERS.mapCommsFriendly2.description));
  let mapCommsFriendly3 = L.marker(convertCoords(...MARKERS.mapCommsFriendly3.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsFriendly3.title + '\n\n' + MARKERS.mapCommsFriendly3.description));
  let mapCommsFriendly4 = L.marker(convertCoords(...MARKERS.mapCommsFriendly4.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsFriendly4.title + '\n\n' + MARKERS.mapCommsFriendly4.description));
  let mapCommsHistory1 = L.marker(convertCoords(...MARKERS.mapCommsHistory1.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHistory1.title + '\n\n' + MARKERS.mapCommsHistory1.description));
  let mapCommsHistory2 = L.marker(convertCoords(...MARKERS.mapCommsHistory2.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHistory2.title + '\n\n' + MARKERS.mapCommsHistory2.description));
  let mapCommsHistory3 = L.marker(convertCoords(...MARKERS.mapCommsHistory3.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHistory3.title + '\n\n' + MARKERS.mapCommsHistory3.description));
  let mapCommsHistory4 = L.marker(convertCoords(...MARKERS.mapCommsHistory4.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHistory4.title + '\n\n' + MARKERS.mapCommsHistory4.description));
  let mapCommsHistory5 = L.marker(convertCoords(...MARKERS.mapCommsHistory5.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHistory5.title + '\n\n' + MARKERS.mapCommsHistory5.description));
  let mapCommsHistory6 = L.marker(convertCoords(...MARKERS.mapCommsHistory6.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHistory6.title + '\n\n' + MARKERS.mapCommsHistory6.description));
  let mapCommsHistory7 = L.marker(convertCoords(...MARKERS.mapCommsHistory7.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHistory7.title + '\n\n' + MARKERS.mapCommsHistory7.description));
  let mapCommsHistory8 = L.marker(convertCoords(...MARKERS.mapCommsHistory8.coords), { icon: commsIcon })
    .bindPopup(md.render(MARKERS.mapCommsHistory8.title + '\n\n' + MARKERS.mapCommsHistory8.description));

  let mapControlPoint1 = L.marker(convertCoords(...MARKERS.mapControlPoint1.coords), { icon: controlPointIconRikers })
    .bindPopup(md.render(MARKERS.mapControlPoint1.title + '\n\n' + MARKERS.mapControlPoint1.description));
  let mapControlPoint2 = L.marker(convertCoords(...MARKERS.mapControlPoint2.coords), { icon: controlPointIconRikers })
    .bindPopup(md.render(MARKERS.mapControlPoint2.title + '\n\n' + MARKERS.mapControlPoint2.description));
  let mapControlPoint3 = L.marker(convertCoords(...MARKERS.mapControlPoint3.coords), { icon: controlPointIconCleaners })
    .bindPopup(md.render(MARKERS.mapControlPoint3.title + '\n\n' + MARKERS.mapControlPoint3.description));
  let mapControlPoint4 = L.marker(convertCoords(...MARKERS.mapControlPoint4.coords), { icon: controlPointIconCleaners })
    .bindPopup(md.render(MARKERS.mapControlPoint4.title + '\n\n' + MARKERS.mapControlPoint4.description));

  let mapEcho1 = L.marker(convertCoords(...MARKERS.mapEcho1.coords), { icon: echoIcon })
    .bindPopup(md.render(MARKERS.mapEcho1.title + '\n\n' + MARKERS.mapEcho2.description));
  let mapEcho2 = L.marker(convertCoords(...MARKERS.mapEcho2.coords), { icon: echoIcon })
    .bindPopup(md.render(MARKERS.mapEcho2.title + '\n\n' + MARKERS.mapEcho2.description));
  let mapEcho3 = L.marker(convertCoords(...MARKERS.mapEcho3.coords), { icon: echoIcon })
    .bindPopup(md.render(MARKERS.mapEcho3.images + '\n\n' + MARKERS.mapEcho3.title + '\n\n' + MARKERS.mapEcho3.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });

  let mapHunterCipher = L.marker(convertCoords(...MARKERS.mapHunterCipher.coords), { icon: hunterIcon })
    .bindPopup(md.render(MARKERS.mapHunterCipher.images + '\n\n' + MARKERS.mapHunterCipher.title + '\n\n' + MARKERS.mapHunterCipher.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapHunterConqueror = L.marker(convertCoords(...MARKERS.mapHunterConqueror.coords), { icon: hunterIcon })
    .bindPopup(md.render(+ MARKERS.mapHunterConqueror.title + '\n\n' + MARKERS.mapHunterConqueror.description));
  let mapHunterCraver = L.marker(convertCoords(...MARKERS.mapHunterCraver.coords), { icon: hunterIcon })
    .bindPopup(md.render(MARKERS.mapHunterCraver.title + '\n\n' + MARKERS.mapHunterCraver.description));
  let mapHunterLumen = L.marker(convertCoords(...MARKERS.mapHunterLumen.coords), { icon: hunterIcon })
    .bindPopup(md.render(MARKERS.mapHunterLumen.images + '\n\n' + MARKERS.mapHunterLumen.title + '\n\n' + MARKERS.mapHunterLumen.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapHunterMerry = L.marker(convertCoords(...MARKERS.mapHunterMerry.coords), { icon: hunterIcon })
    .bindPopup(md.render(MARKERS.mapHunterMerry.title + '\n\n' + MARKERS.mapHunterMerry.description));
  let mapHunterNecronos = L.marker(convertCoords(...MARKERS.mapHunterNecronos.coords), { icon: hunterIcon })
    .bindPopup(md.render(MARKERS.mapHunterNecronos.title + '\n\n' + MARKERS.mapHunterNecronos.description));
  let mapHunterRedtail = L.marker(convertCoords(...MARKERS.mapHunterRedtail.coords), { icon: hunterIcon })
    .bindPopup(md.render(MARKERS.mapHunterRedtail.images + '\n\n' + MARKERS.mapHunterRedtail.title + '\n\n' + MARKERS.mapHunterRedtail.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapHunterTracker = L.marker(convertCoords(...MARKERS.mapHunterTracker.coords), { icon: hunterIcon })
    .bindPopup(md.render(MARKERS.mapHunterTracker.title + '\n\n' + MARKERS.mapHunterTracker.description));

  let mapMainMission1 = L.marker(convertCoords(...MARKERS.mapMainMission1.coords), { icon: missionIcon })
    .bindPopup(md.render(MARKERS.mapMainMission1.title + '\n\n' + MARKERS.mapMainMission1.description));
  let mapMainMission2 = L.marker(convertCoords(...MARKERS.mapMainMission2.coords), { icon: missionIcon })
    .bindPopup(md.render(MARKERS.mapMainMission2.title + '\n\n' + MARKERS.mapMainMission2.description));
  let mapMainMission3 = L.marker(convertCoords(...MARKERS.mapMainMission3.coords), { icon: missionIcon })
    .bindPopup(md.render(MARKERS.mapMainMission3.title + '\n\n' + MARKERS.mapMainMission3.description));
  let mapMission1 = L.marker(convertCoords(...MARKERS.mapMission1.coords), { icon: missionIcon })
    .bindPopup(md.render(MARKERS.mapMission1.title + '\n\n' + MARKERS.mapMission1.description));
  let mapMission2 = L.marker(convertCoords(...MARKERS.mapMission2.coords), { icon: missionIcon })
    .bindPopup(md.render(MARKERS.mapMission2.title + '\n\n' + MARKERS.mapMission2.description));
  let mapMission3 = L.marker(convertCoords(...MARKERS.mapMission3.coords), { icon: missionIcon })
    .bindPopup(md.render(MARKERS.mapMission3.title + '\n\n' + MARKERS.mapMission3.description));
  let mapMission4 = L.marker(convertCoords(...MARKERS.mapMission4.coords), { icon: missionIcon })
    .bindPopup(md.render(MARKERS.mapMission4.title + '\n\n' + MARKERS.mapMission4.description));

  let mapNamedElite1 = L.marker(convertCoords(...MARKERS.mapNamedElite1.coords), { icon: namedEliteIcon })
    .bindPopup(md.render(MARKERS.mapNamedElite1.title + '\n\n' + MARKERS.mapNamedElite1.description));
  let mapNamedElite2 = L.marker(convertCoords(...MARKERS.mapNamedElite2.coords), { icon: namedEliteIcon })
    .bindPopup(md.render(MARKERS.mapNamedElite2.title + '\n\n' + MARKERS.mapNamedElite2.description));
  let mapNamedElite3 = L.marker(convertCoords(...MARKERS.mapNamedElite3.coords), { icon: namedEliteIcon })
    .bindPopup(md.render(MARKERS.mapNamedElite3.title + '\n\n' + MARKERS.mapNamedElite3.description));
  let mapNamedElite4 = L.marker(convertCoords(...MARKERS.mapNamedElite4.coords), { icon: namedEliteIcon })
    .bindPopup(md.render(MARKERS.mapNamedElite4.title + '\n\n' + MARKERS.mapNamedElite4.description));
  let mapNamedElite5 = L.marker(convertCoords(...MARKERS.mapNamedElite5.coords), { icon: namedEliteIcon })
    .bindPopup(md.render(MARKERS.mapNamedElite5.title + '\n\n' + MARKERS.mapNamedElite5.description));
  let mapNamedElite6 = L.marker(convertCoords(...MARKERS.mapNamedElite6.coords), { icon: namedEliteIcon })
    .bindPopup(md.render(MARKERS.mapNamedElite6.title + '\n\n' + MARKERS.mapNamedElite6.description));
  let mapNamedElite7 = L.marker(convertCoords(...MARKERS.mapNamedElite7.coords), { icon: namedEliteIcon })
    .bindPopup(md.render(MARKERS.mapNamedElite7.title + '\n\n' + MARKERS.mapNamedElite7.description));

  let mapResCompNode1 = L.marker(convertCoords(...MARKERS.mapResCompNode1.coords), { icon: nodeCompIcon })
    .bindPopup(md.render(MARKERS.mapResCompNode1.title + '\n\n' + MARKERS.mapResCompNode1.description));
  let mapResCompNode2 = L.marker(convertCoords(...MARKERS.mapResCompNode2.coords), { icon: nodeCompIcon })
    .bindPopup(md.render(MARKERS.mapResCompNode2.title + '\n\n' + MARKERS.mapResCompNode2.description));
  let mapResCompNode3 = L.marker(convertCoords(...MARKERS.mapResCompNode3.coords), { icon: nodeCompIcon })
    .bindPopup(md.render(MARKERS.mapResCompNode3.title + '\n\n' + MARKERS.mapResCompNode3.description));
  let mapResCompNode4 = L.marker(convertCoords(...MARKERS.mapResCompNode4.coords), { icon: nodeCompIcon })
    .bindPopup(md.render(MARKERS.mapResCompNode4.title + '\n\n' + MARKERS.mapResCompNode4.description));

  let mapResFoodNode1 = L.marker(convertCoords(...MARKERS.mapResFoodNode1.coords), { icon: nodeFoodIcon })
    .bindPopup(md.render(MARKERS.mapResFoodNode1.title + '\n\n' + MARKERS.mapResFoodNode1.description));
  let mapResFoodNode2 = L.marker(convertCoords(...MARKERS.mapResFoodNode2.coords), { icon: nodeFoodIcon })
    .bindPopup(md.render(MARKERS.mapResFoodNode2.title + '\n\n' + MARKERS.mapResFoodNode2.description));
  let mapResFoodNode3 = L.marker(convertCoords(...MARKERS.mapResFoodNode3.coords), { icon: nodeFoodIcon })
    .bindPopup(md.render(MARKERS.mapResFoodNode3.title + '\n\n' + MARKERS.mapResFoodNode3.description));

  let mapResWaterNode1 = L.marker(convertCoords(...MARKERS.mapResWaterNode1.coords), { icon: nodeWaterIcon })
    .bindPopup(md.render(MARKERS.mapResWaterNode1.title + '\n\n' + MARKERS.mapResWaterNode1.description));
  let mapResWaterNode2 = L.marker(convertCoords(...MARKERS.mapResWaterNode2.coords), { icon: nodeWaterIcon })
    .bindPopup(md.render(MARKERS.mapResWaterNode2.title + '\n\n' + MARKERS.mapResWaterNode2.description));
  let mapResWaterNode3 = L.marker(convertCoords(...MARKERS.mapResWaterNode3.coords), { icon: nodeWaterIcon })
    .bindPopup(md.render(MARKERS.mapResWaterNode3.title + '\n\n' + MARKERS.mapResWaterNode3.description));
  let mapResWaterNode4 = L.marker(convertCoords(...MARKERS.mapResWaterNode4.coords), { icon: nodeWaterIcon })
    .bindPopup(md.render(MARKERS.mapResWaterNode4.title + '\n\n' + MARKERS.mapResWaterNode4.description));

  let mapSafeHouse1 = L.marker(convertCoords(...MARKERS.mapSafeHouse1.coords), { icon: safeHouseIcon })
    .bindPopup(md.render(MARKERS.mapSafeHouse1.title + '\n\n' + MARKERS.mapSafeHouse1.description));
  let mapSafeHouse2 = L.marker(convertCoords(...MARKERS.mapSafeHouse2.coords), { icon: safeHouseIcon })
    .bindPopup(md.render(MARKERS.mapSafeHouse2.title + '\n\n' + MARKERS.mapSafeHouse2.description));

  let mapSettlement1 = L.marker(convertCoords(...MARKERS.mapSettlement1.coords), { icon: settlementBridgeIcon })
    .bindPopup(md.render(MARKERS.mapSettlement1.title + '\n\n' + MARKERS.mapSettlement1.description));

  let mapShdCache1 = L.marker(convertCoords(...MARKERS.mapShdCache1.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache1.images + '\n\n' + MARKERS.mapShdCache1.title + '\n\n' + MARKERS.mapShdCache1.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache2 = L.marker(convertCoords(...MARKERS.mapShdCache2.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache2.images + '\n\n' + MARKERS.mapShdCache2.title + '\n\n' + MARKERS.mapShdCache2.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache3 = L.marker(convertCoords(...MARKERS.mapShdCache3.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache3.images + '\n\n' + MARKERS.mapShdCache3.title + '\n\n' + MARKERS.mapShdCache3.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache4 = L.marker(convertCoords(...MARKERS.mapShdCache4.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache4.images + '\n\n' + MARKERS.mapShdCache4.title + '\n\n' + MARKERS.mapShdCache4.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache5 = L.marker(convertCoords(...MARKERS.mapShdCache5.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache5.images + '\n\n' + MARKERS.mapShdCache5.title + '\n\n' + MARKERS.mapShdCache5.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache6 = L.marker(convertCoords(...MARKERS.mapShdCache6.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache6.images + '\n\n' + MARKERS.mapShdCache6.title + '\n\n' + MARKERS.mapShdCache6.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache7 = L.marker(convertCoords(...MARKERS.mapShdCache7.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache7.title + '\n\n' + MARKERS.mapShdCache7.description));
  let mapShdCache8 = L.marker(convertCoords(...MARKERS.mapShdCache8.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache8.images + '\n\n' + MARKERS.mapShdCache8.title + '\n\n' + MARKERS.mapShdCache8.description))
    .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
  let mapShdCache9 = L.marker(convertCoords(...MARKERS.mapShdCache9.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache9.title + '\n\n' + MARKERS.mapShdCache9.description));
  let mapShdCache10 = L.marker(convertCoords(...MARKERS.mapShdCache10.coords), { icon: shdCacheIcon })
    .bindPopup(md.render(MARKERS.mapShdCache10.title + '\n\n' + MARKERS.mapShdCache10.description));

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
