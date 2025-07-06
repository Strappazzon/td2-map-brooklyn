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
    description: "**Mask:** Conqueror\n\n**Steps:** Detonate 7 stuffed animals across Brooklyn, then interact with a monkey plush to spawn the Hunter.\n\n[Full guide.](https://youtu.be/KhMcKx75kdc?t=53)"
  },
  mapHunterCraver: {
    coords: [ 937, 609 ],
    title: "# Hunter Spawn",
    description: "**Mask:** Craver\n\n**Steps:** Collect 4 canisters across Brooklyn Heights. Once all canisters are gathered, place them on the boat and the Hunter will spawn.\n\n[Full guide.](https://youtu.be/R6A8DEWbboI?t=41)"
  },
  mapHunterLumen: {
    coords: [ 1792, 745 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-lumen_1.jpg\" alt=\"Garage Location\"></div></div>",
    title: "# Hunter Spawn",
    description: "**Mask:** Lumen\n\n**Requirements:** Night time\n\n**Steps:** Trip the switch inside the garage and follow the UV lights. The Hunter will spawn at the final location.\n\n[Full guide.](https://redd.it/1kwzqez)"
  },
  mapHunterMerry: {
    coords: [ 1917, 323 ],
    title: "# Hunter Spawn",
    description: "**Mask:** Merry\n\n**Steps:** Collect 7 parts of a carousel horse, then assemble them at the Merry-Go-Round where the Hunter will spawn.\n\n[Full guide.](https://redd.it/1kx6yjh)"
  },
  mapHunterNecronos: {
    coords: [ 2886, 588 ],
    title: "# Hunter Spawn",
    description: "**Mask:** Necronos\n\n**Requirements:** Complete all prior 7 Hunter encounters.\n\n**Steps:** Go to The Division 1 starting safe house (near **The Warehouse** Control Point) and interact with the whiteboard inside. Follow the UV lights to the rooftop where the Hunter will engage.\n\n[Full guide.](https://redd.it/1kyek7o)"
  },
  mapHunterRedtail: {
    coords: [ 2898, 823 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_1.jpg\" alt=\"Outpost Entrance\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_2.jpg\" alt=\"Outpost\"></div></div>",
    title: "# Hunter Spawn",
    description: "**Mask:** Redtail\n\n**Steps:** Disable nine antennas across Brooklyn then go to the listening outpost and interact with the PC to trigger the alarm. Go back to the surface and the Hunter will spawn ahead of you.\n\n[Full guide.](https://redd.it/1kx49yp)"
  },
  mapHunterTracker: {
    coords: [ 3507, 1145 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-tracker_1.jpg\" alt=\"Entrance\"></div></div>",
    title: "# Hunter Spawn",
    description: "**Mask:** Tracker\n\n**Steps:** Enter the 192 Building from the southern entrance (near **The Farm** Control Point), then follow a set of movements to activate the \"RISE\" switch and spawn the Hunter.\n\n[Full guide.](https://redd.it/1kye8fv)"
  },
  mapHunterRedtailClue1: {
    coords: [ 1686, 915 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-1.jpg\" alt=\"Antenna Switch\"></div></div>",
    title: "# Antenna Switch",
    description: "Part of the Redtail Hunter puzzle."
  },
  mapHunterRedtailClue2: {
    coords: [ 1796, 581 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-2.jpg\" alt=\"Antenna Switch\"></div></div>",
    title: "# Antenna Switch",
    description: "Part of the Redtail Hunter puzzle.\n\n**Location:** On the roof"
  },
  mapHunterRedtailClue3: {
    coords: [ 2468, 645 ],
    images: "<div class=\"marker-images\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-3_1.jpg\" alt=\"Yellow Box\"></div><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-3_2.jpg\" alt=\"Antenna Switch\"></div></div>",
    title: "# Antenna Switch",
    description: "Part of the Redtail Hunter puzzle."
  },
  mapHunterRedtailClue4: {
    coords: [ 2311, 928 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-4.jpg\" alt=\"Antenna Switch\"></div></div>",
    title: "# Antenna Switch",
    description: "Part of the Redtail Hunter puzzle. Access by climbing a truck."
  },
  mapHunterRedtailClue5: {
    coords: [ 2799, 1174 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-5.jpg\" alt=\"Antenna Switch\"></div></div>",
    title: "# Antenna Switch",
    description: "Part of the Redtail Hunter puzzle. Access by shooting three yellow boxes."
  },
  mapHunterRedtailClue6: {
    coords: [ 3118, 1449 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-6.jpg\" alt=\"Antenna Switch\"></div></div>",
    title: "# Antenna Switch",
    description: "Part of the Redtail Hunter puzzle."
  },
  mapHunterRedtailClue7: {
    coords: [ 3278, 1208 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-7.jpg\" alt=\"Antenna Switch\"></div></div>",
    title: "# Antenna Switch",
    description: "Part of the Redtail Hunter puzzle."
  },
  mapHunterRedtailClue8: {
    coords: [ 3562, 1038 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-8.jpg\" alt=\"Antenna Switch\"></div></div>",
    title: "# Antenna Switch",
    description: "Part of the Redtail Hunter puzzle."
  },
  mapHunterRedtailClue9: {
    coords: [ 3487, 750 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/hunter-redtail_clue-9.jpg\" alt=\"Antenna Switch\"></div></div>",
    title: "# Antenna Switch",
    description: "Part of the Redtail Hunter puzzle.\n\n**Location:** On the right of the SHD Tech Cache."
  },
  mapKeyMaint1: {
    coords: [ 2615, 1194 ],
    images: "<div class=\"marker-image\"><div class=\"image-wrapper\"><img src=\"assets/img/screenshots/key-maint_1.jpg\" alt=\"Rooftop Maintenance Key\"></div></div>",
    title: "# Rooftop Maintenance Key",
    description: "Used to access the gate on the rooftop."
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

  // Get marker ID from URL
  function getQueryParam(paramName) {
    const PAGE_URL = new URL(window.location.href);

    return PAGE_URL.searchParams.get(paramName);
  }

  // Delete marker ID from URL
  function delQueryParam(paramName) {
    const CURRENT_URL = new URL(window.location.href);
    CURRENT_URL.searchParams.delete(paramName);

    window.history.replaceState({}, '', CURRENT_URL);
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
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'bottomleft',
      title: 'Full screen',
      titleCancel: 'Exit full screen'
    },
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

  // Tooltips

  let tooltipOptions = {
    offset: [ 28, -16 ],
    opacity: 1
  };

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

  let keyIcon = L.icon({
    iconUrl: 'assets/img/markers/key.png',
    ...iconOptions
  });

  let missionIcon = L.icon({
    iconUrl: 'assets/img/markers/mission.svg',
    ...iconOptions
  });

  let miscIcon = L.icon({
    iconUrl: 'assets/img/markers/misc.png',
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

  // Markers: Overlays

  const OVERLAY_CONFIG = {
    'Comms': {
      keys: [
        'mapCommsBridge1', 'mapCommsBridge2', 'mapCommsBridge3', 'mapCommsBridge4', 'mapCommsBridge5', 'mapCommsBridge6',
        'mapCommsHostiles1', 'mapCommsHostiles2', 'mapCommsHostiles3', 'mapCommsHostiles4', 'mapCommsHostiles5', 'mapCommsHostiles6', 'mapCommsHostiles7', 'mapCommsHostiles8', 'mapCommsHostiles9', 'mapCommsHostiles10',
        'mapCommsFriendly1', 'mapCommsFriendly2', 'mapCommsFriendly3', 'mapCommsFriendly4',
        'mapCommsHistory1', 'mapCommsHistory2', 'mapCommsHistory3', 'mapCommsHistory4', 'mapCommsHistory5', 'mapCommsHistory6', 'mapCommsHistory7', 'mapCommsHistory8'
      ],
      icon: commsIcon
    },
    'Control Point': {
      keys: [
        'mapControlPoint1', 'mapControlPoint2', 'mapControlPoint3', 'mapControlPoint4'
      ],
      icon: null
    },
    'ECHO': {
      keys: [
        'mapEcho1', 'mapEcho2', 'mapEcho3'
      ],
      icon: echoIcon
    },
    'Hunter': {
      keys: [
        'mapHunterCipher', 'mapHunterConqueror', 'mapHunterCraver', 'mapHunterLumen', 'mapHunterMerry', 'mapHunterNecronos', 'mapHunterRedtail', 'mapHunterTracker'
      ],
      icon: hunterIcon
    },
    'Key': {
      keys: [
        'mapKeyMaint1'
      ],
      icon: keyIcon
    },
    'Misc': {
      keys: [
        'mapHunterRedtailClue1', 'mapHunterRedtailClue2', 'mapHunterRedtailClue3', 'mapHunterRedtailClue4', 'mapHunterRedtailClue5', 'mapHunterRedtailClue6', 'mapHunterRedtailClue7', 'mapHunterRedtailClue8', 'mapHunterRedtailClue9'
      ],
      icon: miscIcon
    },
    'Mission': {
      keys: [
        'mapMainMission1', 'mapMainMission2', 'mapMainMission3', 'mapMission1', 'mapMission2', 'mapMission3', 'mapMission4'
      ],
      icon: missionIcon
    },
    'Named Elite': {
      keys: [
        'mapNamedElite1', 'mapNamedElite2', 'mapNamedElite3', 'mapNamedElite4', 'mapNamedElite5', 'mapNamedElite6', 'mapNamedElite7'
      ],
      icon: namedEliteIcon
    },
    'Resource Node': {
      keys: [
        'mapResCompNode1', 'mapResCompNode2', 'mapResCompNode3', 'mapResCompNode4',
        'mapResFoodNode1', 'mapResFoodNode2', 'mapResFoodNode3',
        'mapResWaterNode1', 'mapResWaterNode2', 'mapResWaterNode3', 'mapResWaterNode4'
      ],
      icon: null
    },
    'Safe House': {
      keys: [
        'mapSafeHouse1', 'mapSafeHouse2'
      ],
      icon: safeHouseIcon
    },
    'Settlement': {
      keys: [
        'mapSettlement1'
      ],
      icon: settlementBridgeIcon
    },
    'SHD Tech Cache': {
      keys: [
        'mapShdCache1', 'mapShdCache2', 'mapShdCache3', 'mapShdCache4', 'mapShdCache5', 'mapShdCache6', 'mapShdCache7', 'mapShdCache8', 'mapShdCache9', 'mapShdCache10'
      ],
      icon: shdCacheIcon
    }
  };

  // Markers: Definitions

  let mapMarkers = {};
  let mapOverlays = {};

  for (const [ overlayName, { keys, icon } ] of Object.entries(OVERLAY_CONFIG)) {
    let markers = [];

    for (const K of keys) {
      const MARKER_DATA = MARKERS[ K ];
      let markerIcon = icon || getMarkerIcon(K);
      let marker = L.marker(convertCoords(...MARKER_DATA.coords), { icon: markerIcon });
      let copyBtn = '<a id="copy" class="button secondary copy" title="Copy link to this marker">#</a>';

      if (window.isMobile === false) {
        marker = marker.bindTooltip((MARKER_DATA.title).replace(/^#\s/i, ''), { ...tooltipOptions });
      }

      if (MARKER_DATA.images) {
        marker = marker
          .bindPopup(md.render(MARKER_DATA.images + '\n\n' + MARKER_DATA.title + copyBtn + '\n\n' + MARKER_DATA.description))
          .on('popupopen', () => { const lightbox = new SimpleLightbox(LIGHTBOX_SELECTOR, { ...lightboxOptions }); });
      } else {
        marker = marker
          .bindPopup(md.render(MARKER_DATA.title + copyBtn + '\n\n' + MARKER_DATA.description));
      }

      markers.push(marker);
      mapMarkers[ K ] = marker;
    }

    mapOverlays[ overlayName ] = L.layerGroup(markers);
  }

  function getMarkerIcon(key) {
    if (key.startsWith('mapControlPoint')) {
      if (MARKERS[ key ].description === 'Rikers') return controlPointIconRikers;
      if (MARKERS[ key ].description === 'Cleaners') return controlPointIconCleaners;
    }

    if (key.startsWith('mapResCompNode')) return nodeCompIcon;
    if (key.startsWith('mapResFoodNode')) return nodeFoodIcon;
    if (key.startsWith('mapResWaterNode')) return nodeWaterIcon;
  }

  let layerControl = L.control.layers({}, mapOverlays, { position: 'topleft' }).addTo(map);

  // Neighborhoods: Definitions

  let mapNeighborhoodBrooklynHeights = L.marker(convertCoords(1404, 1423), { icon: labelBrooklynHeights, interactive: false, keyboard: false });
  let mapNeighborhoodDumbo = L.marker(convertCoords(3100, 871), { icon: labelDumbo, interactive: false, keyboard: false });

  // Neighborhoods: Layers

  let mapNeighborhoods = L.layerGroup([ mapNeighborhoodBrooklynHeights, mapNeighborhoodDumbo ]);

  // Borders: Definitions

  let mapBordersData = {
    bridge: [
      [ 2045, 1096 ], // Start, End of DUMBO
      [ 2189, 1338 ],
      [ 2177, 1388 ], // End of Brooklyn Heights
      [ 2394, 1444 ],
      [ 2463, 1192 ]
    ],
    brooklynHeights: [
      [ 1596, 348 ],
      [ 1369, 493 ],
      [ 1220, 326 ],
      [ 533, 791 ],
      [ 700, 1004 ],
      [ 553, 1167 ],
      [ 274, 972 ],
      [ 6, 1332 ], // Top-left corner
      [ 815, 1947 ],
      [ 698, 2146 ],
      [ 994, 2238 ],
      [ 1028, 2193 ],
      [ 1268, 2338 ],
      [ 1296, 2293 ],
      [ 1674, 2525 ],
      [ 1754, 2529 ], // Bottom-left corner
      [ 1884, 2002 ],
      [ 2116, 2054 ],
      [ 2177, 1812 ],
      [ 1988, 1758 ],
      [ 2177, 1388 ]
    ],
    dumbo: [
      [ 2045, 1096 ], // Start of The Bridge
      [ 2154, 1072 ],
      [ 2375, 1169 ],
      [ 2393, 1143 ],
      [ 2468, 1167 ],
      [ 2463, 1192 ], // End of The Bridge
      [ 2613, 1297 ],
      [ 2547, 1533 ],
      [ 2755, 1596 ],
      [ 2751, 1629 ],
      [ 2927, 1667 ],
      [ 3101, 1665 ],
      [ 3090, 1509 ],
      [ 3266, 1610 ],
      [ 3285, 1705 ],
      [ 3565, 1786 ], // Bottom-right corner
      [ 3659, 1304 ],
      [ 3711, 1316 ],
      [ 3733, 1201 ],
      [ 3675, 1185 ],
      [ 3691, 1108 ],
      [ 3777, 1132 ],
      [ 3783, 1110 ],
      [ 3943, 1151 ],
      [ 3975, 999 ],
      [ 3910, 981 ],
      [ 3916, 941 ],
      [ 3876, 930 ],
      [ 3914, 744 ], // Top-right corner
      [ 3519, 642 ],
      [ 3530, 544 ],
      [ 3274, 481 ],
      [ 3255, 369 ],
      [ 2954, 282 ],
      [ 2834, 328 ],
      [ 2471, 238 ],
      [ 2345, 396 ],
      [ 2111, 340 ],
      [ 2135, 259 ],
      [ 2012, 225 ],
      [ 2039, 144 ],
      [ 1842, 87 ],
      [ 1816, 160 ],
      [ 1644, 185 ],
      [ 1535, 257 ], // Top-left corner
      [ 1596, 348 ], // Start of Brooklyn Heights
      [ 1709, 510 ],
      [ 1702, 542 ],
      [ 1854, 727 ],
      [ 1862, 780 ],
      [ 2045, 1096 ] // Start of The Bridge
    ]
  };

  // Borders: Layers

  let bordersPolylines = [];

  for (const coords of Object.values(mapBordersData)) {
    bordersPolylines.push(
      L.polyline(coords.map(([ x, y ]) => convertCoords(x, y)), {
        color: '#f5f5f5',
        weight: 2,
        opacity: 0.33,
        interactive: false,
        keyboard: false
      })
    );
  }

  let mapBorders = L.layerGroup(bordersPolylines);

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

  function hideAllMarkers() {
    TOGGLE_CHK.forEach(chk => {
      const LAYER_ID = chk.dataset.layer;

      chk.checked = false;
      mapOverlays[ LAYER_ID ].removeFrom(map);
    });
  }

  function showAllMarkers() {
    TOGGLE_CHK.forEach(chk => {
      const LAYER_ID = chk.dataset.layer;

      chk.checked = true;
      mapOverlays[ LAYER_ID ].addTo(map);
    });
  }

  function toggleZones() {
    if (neighborhoodsVisible === true) {
      map.removeLayer(mapNeighborhoods);
      map.removeLayer(mapBorders);
      ZONESTG_BTN.classList.add('disabled');
      neighborhoodsVisible = false;
    } else {
      map.addLayer(mapNeighborhoods);
      map.addLayer(mapBorders);
      ZONESTG_BTN.classList.remove('disabled');
      neighborhoodsVisible = true;
    }
  }

  HIDEALL_BTN.addEventListener('click', hideAllMarkers);
  HIDEALL_BTN.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hideAllMarkers();
    }
  });

  SHOWALL_BTN.addEventListener('click', showAllMarkers);
  SHOWALL_BTN.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showAllMarkers();
    }
  });

  let neighborhoodsVisible = true;

  ZONESTG_BTN.addEventListener('click', toggleZones);
  ZONESTG_BTN.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleZones();
    }
  });

  // Copy link to marker
  map.on('popupopen', (e) => {
    const POPUP = e.popup.getElement();
    const COPYBTN = POPUP ? POPUP.querySelector('#copy') : null;

    if (!COPYBTN) return;

    let markerKey = null;
    for (const [ key, marker ] of Object.entries(mapMarkers)) {
      if (marker.getLatLng().equals(e.popup._latlng)) {
        markerKey = key;

        break;
      }
    }

    if (!markerKey) return;

    COPYBTN.addEventListener('click', e => {
      e.preventDefault();

      const CURRENT_URL = new URL(window.location.href);

      CURRENT_URL.searchParams.set('locId', markerKey);
      navigator.clipboard.writeText(CURRENT_URL.toString());
    });
  });

  // Initialize Controls

  centerViewButton.addTo(map);
  map.attributionControl.setPrefix(null);
  map.attributionControl.addAttribution('<a href="https://github.com/Strappazzon/td2-map-brooklyn/blob/master/.github/README.md#licensing" target="_blank">Credits</a>');

  // Initialize map

  L.control.zoom({ position: 'bottomleft' }).addTo(map);
  L.imageOverlay('assets/img/map.jpg', mapBounds).addTo(map);

  // Default Layers

  if (neighborhoodsVisible) {
    mapBorders.addTo(map);
    mapNeighborhoods.addTo(map);
  };

  Object.values(mapOverlays).forEach(layerGroup => layerGroup.addTo(map));

  // Go to marker if an ID was provided in the query param

  const LOCATION_ID = getQueryParam('locId');

  if (LOCATION_ID && mapMarkers[ LOCATION_ID ]) {
    const MARKER = mapMarkers[ LOCATION_ID ];

    function panAndOpen() {
      map.setView(MARKER.getLatLng(), 0, { animate: true });
      MARKER.openPopup();

      // Remove the param from URL after opening the popup
      delQueryParam('locId');
    }

    map._loaded ? panAndOpen() : map.once('load', panAndOpen);
  }
});
