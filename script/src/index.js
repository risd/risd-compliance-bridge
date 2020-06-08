var { hydrateComponents } = require('@risd/react-hydrator');
var { themes } = require('@risd/ui');

// Hydrate React components
hydrateComponents(themes.congratulationsV2);

var navSelector = '[data-react-component="Nav"]'

// unhide nav element once it's hydrated
const navElement = document.querySelector(navSelector);
navElement.style.display = 'block';
