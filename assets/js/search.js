document.addEventListener('DOMContentLoaded', () => {
  const MARKERS = window.MARKERS;

  // Convert Photoshop coordinates to Leaflet
  function convertCoords(x, y) {
    return [ window.mapBounds[ 1 ][ 0 ] - y, x ];
  }

  // Convert Markdown to HTML
  const md = window.markdownit({
    breaks: true,
    html: true,
    quotes: '""\'\'',
  });

  const SEARCH_INPUT = document.querySelector('#search-input');
  const SEARCH_BTN = document.querySelector('#search-submit');
  const CLEAR_BTN = document.querySelector('#search-clear');
  const SEARCH_RESULTS = document.querySelector('.search-results');
  const SEARCH_NOMATCH = document.querySelector('.nomatch');

  function showResults(results) {
    SEARCH_RESULTS.querySelectorAll('.search-result')
      .forEach(el => el.remove());

    if (results.length === 0) {
      SEARCH_NOMATCH.hidden = false;
      CLEAR_BTN.hidden = false;

      return;
    }

    SEARCH_NOMATCH.hidden = true;
    CLEAR_BTN.hidden = false;

    results.forEach(({ key, title, description }) => {
      const RESULT_DIV = document.createElement('div');
      const COORDS = MARKERS[ key ].coords;
      RESULT_DIV.className = 'search-result';
      RESULT_DIV.innerHTML = `${md.render(title)}${md.render(description)}`;
      RESULT_DIV.dataset.coords = COORDS.join(',');
      RESULT_DIV.addEventListener('click', () => {
        const [ LAT, LNG ] = RESULT_DIV.dataset.coords.split(',').map(Number);
        const ZOOM = 18;
        window.leafletMap.setView(convertCoords(...[ LAT, LNG ]), ZOOM, { animate: true });
      });

      SEARCH_RESULTS.appendChild(RESULT_DIV);
    });
  }

  function doSearch() {
    const SEARCH_QUERY = SEARCH_INPUT.value.trim().toLowerCase();
    if (SEARCH_QUERY.length < 3) return;

    const results = [];
    for (const [ key, marker ] of Object.entries(MARKERS)) {
      const title = marker.title || '';
      const description = marker.description || '';
      if (title.toLowerCase().includes(SEARCH_QUERY) || description.toLowerCase().includes(SEARCH_QUERY)) {
        results.push({ key, title, description });
      }
    }

    showResults(results);
  }

  SEARCH_BTN.addEventListener('click', doSearch);
  SEARCH_INPUT.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });

  CLEAR_BTN.addEventListener('click', () => {
    SEARCH_INPUT.value = '';
    CLEAR_BTN.hidden = true;
    SEARCH_NOMATCH.hidden = true;
    SEARCH_RESULTS.querySelectorAll('.search-result').forEach(el => el.remove());
  });
});
